
// Create a function verifying prime number

function isPrime(number){

    var divisor = 3;
    var limit =  Math.sqrt(number);
    if (number === 2 || number === 3){
        return true;
    }
    if (number % 2 === 0){
        return false;
    }

    // Check for odd numbers
    if (divisor < limit){

        if (number % divisor === 0){
            return false;
        }else {
            divisor+=2;
        }
    }
    return true;
}
console.log("Prime Number (n):"+isPrime(123));


// Return an array of prime factors
function primeFactors(number) {

    var factors = [];
    var divisor = 2;

    while (number > 2){
        if (number % divisor == 0){
            factors.push(divisor);
            number = number / divisor; // next dividend
        }else {
            divisor++;
        }
    }

    return factors;

}
console.log("Prime Factors (n):"+primeFactors(69));

// Fibonacci Series

function fibo(number){
    if (number <=2)
        return 1;
    else {
        return fibo(number-2)+fibo(number-1);
    }
}

console.log("Fibonacci "+fibo(12));

// Greatest Common Divisor

function greatestCommonDivisor(x,y) {

    var divisor = 2;
    var greatestDivisor = 1;

    while (x >= divisor && y >= divisor){
        if (x % divisor == 0 && y % divisor == 0){
            greatestDivisor = divisor;
        }
        divisor++;
    }
    return greatestDivisor;
}

console.log("Greate CD: "+greatestCommonDivisor(14,21));
console.log("Great CD: "+greatestCommonDivisor(69,169));

 // Remove duplicate

function removeDuplicate(arr){
    // not array its an object that acts as map
    var exists = {};
    var outArr = [];
    var elem;

    for (var i =0 ; i < arr.length ; i++){
        elem = arr[i];
        if(!exists[elem]){
            outArr.push(arr[i]);
            exists[elem]=true;
        }
    }
    return outArr;
}

console.log("After removing duplicate "+removeDuplicate([1,2,3,3,3,3,3,4,5,8,1]));


function swapWithoutTemp(a,b){   // 6, 3

    console.log("a:"+a+" - b:"+b);

    b = a - b;   // b = 2-3 = -1
    a = a - b;   // 2 - -1 = 3
    b = a + b;   // 3 + -1  = 2

    console.log("a:"+ a +" - b:"+ b);

}
swapWithoutTemp(2,3);


// Reverse a string

function reverseAString(str){

    var revStr='';
    for (var i =str.length-1 ; i >= 0; i--){
        revStr += str[i];
    }
    return revStr;
}

console.log("The String after reversing: "+reverseAString("hello"));

//

function reverseViaReverse(str){
    return str.split('').reverse().join('');
}

console.log("The String after reverse(): "+reverseViaReverse("hello"));


function reverseWordsInSentence(sentence){

    var rev = [];
    var wordlen = 0;

    for (var i = sentence.length-1; i >=0; i--) {
        if (sentence[i] ===' ' || i == 0){
            console.log("Push:"+sentence.substr(i,wordlen+1));
            rev.push(sentence.substr(i,wordlen+1));
            wordlen=0;
        }else {
            wordlen++;
        }
    }

    return rev.join(' ');
}
console.log(reverseWordsInSentence("He is a good boy."));


// Reverse in place
function reverseInPlace(str){
    var strArr = str.split(' ');
    var revArr = [];

    for (var x =0; x< strArr.length; x++){
        revArr.push(reverseAString(strArr[x]))
    }
    return revArr.join(' ');
}
console.log("Reverse in Place: "+reverseInPlace("I am a good boy"));

// Generate Random number b/w 5 & 7
function rand5(){
    return Math.random() * 4;
}

function rand57(){
    return (5 + (rand5()/5) * 2);
}
console.log(rand57());
console.log(rand57());
console.log(rand57());
console.log(rand57());
console.log(rand57());
console.log(rand57());
console.log(rand57());

// factorial in loop

function factorial(number){
    var fact = 1;
    for (var i = 1; i <= number; i++){
        fact = fact * i;
    }
return fact;
}
console.log(factorial(5));


// factorial in recursion
function factorialRec(number){
    if (number <= 1){
        return 1;
    }else {
        return number * factorial(number - 1);
    }
}
console.log(factorialRec(5));

