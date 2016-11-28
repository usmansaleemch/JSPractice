
// Q1 : undefined vs not defined
(function(){

  var x;
  console.log(x);

  console.log(typeof x === 'undefined');
  // Check if an object is an array
  var objectArr = [];

  if (Object.prototype.toString.call(objectArr)
      === '[object Array]'){
        console.log("Object is an Array");
      }

 var bar = true;
 console.log(bar + 1) // 2
 console.log(bar + "xyz"); //truexyz
 console.log(bar + true); // 2
 console.log(bar + false); //1

// Assosiativity goes from R to L
 var z = 1 , y = z = typeof y
 console.log(y);

// Function definition can have only one reference
var bar = function() { return 12;}
  console.log(typeof bar);

// Checking Array
var numArr = new Array(100);
console.log(numArr);

console.log(Array.isArray(numArr));
console.log(numArr instanceof Array);

var obj = {
  message:"Hello",
  innerMsg: function(){
    console.log(this.message);
  }
};
console.log(obj.innerMsg());


function Person(name, age){
    this.name = name || "John";
    this.age = age || 24;
    this.displayName = function(){
        console.log(this.name);
    }
}

Person.name = "John";
Person.displayName = function(){
    console.log(this.name);
}

var person1 = new Person('Nishant');
    person1.displayName();
    Person.displayName();



}());
