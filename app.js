// What is an IIFE
(function(){
    // Why use 'use strict' - Strict parsing and error handling at runtime
    //'use strict';
//    console.log("Function Executed");
//
//    // Create an object in JS
//    var developer = {
//        name: 'Usman',
//        age: 34
//    };
//
//    console.log(developer.name +" is " +developer.age + " years old.");
//
//    // Creating Array
    var technologies =[];
    technologies=['Java','Javascript','HTML','CSS'];
//
//    console.log(technologies[0]+ " is my favorite.");
//    // Looping through arrays
//    var x;
//    for (x in technologies){
//        console.log("I know "+technologies[x]);
//    }
//
//    for (var y=0; y<technologies.length; y++){
//        console.log(technologies[y]);
//    }

    // Arguments length / callee
//    var namedFunction = function(x){
//        console.log("This is named function with "+typeof x,arguments.length);
//    };
//
//    namedFunction();
//    namedFunction(1);
//    namedFunction(1,2,3);

    // Closure - counter variable is used outside
//    function createClosure(){
//        var counter=0;
//
//        return {
//            increment: function(){
//                counter++;
//            },
//            print: function(){
//                console.log(counter);
//            }
//        }
//    }
//
//    var c = createClosure();
//    c.increment();
//    c.print();

    // Built in method of string

//    var s = "Something";
//    var s1 = "else";
//    s = s.toUpperCase().toLowerCase();
//    console.log();
//    console.log("The character at first position is : "+s.charAt(0));
//
//    console.log("After Concatenation : "+s.concat(s1));
//
//    console.log("The index of e is at "+s.indexOf("e"));
//
//    //console.log("The last element is "+technologies.pop());
//    // the method that reverses the element order in array
//    technologies.reverse();
//
//    console.log("The last element is "+technologies.pop());
//
//
//    // variable name convention is it begins with letter or underscore
//
//    console.log('1'== 1)
//    console.log('1'=== 1)
//    // Creat Array
//    var newArray = new Array();
//    newArray[0]="Usman";
//    newArray[1]="Saleem";
//    newArray[2]="Chodhary";
//
//    console.log(newArray.toString());
//
//    console.log(isNaN("1234"));
//    console.log(isNaN("Hello"));
//    console.log(isNaN(123));
//
//    console.log("1"+2+4);
//
//    console.log(window.outerWidth);
//
//    // this context
//    var objPointer = {outerWidth:20};
//    function say(){
//        console.log(this.outerWidth);
//    }
//    //say();
//    say.apply(objPointer); // will print window.outerwidth
//
//    // Style + class name
//    document.getElementById("container").style.fontSize = "20";
//    document.getElementById("container").className = "blueBg";

//    var main = document.getElementById("container");
//    technologies.forEach(function(element,index,array){
//        main.appendChild(document.createTextNode(element + " is at " + index));
//        main.appendChild(document.createElement("br"));
//    });
//
//    var objectInJs = new Object();
//    objectInJs.firstName = "Usman";
//    objectInJs.lastName="Chodhary";
//    objectInJs.getFullName = function() {
//        return objectInJs.firstName +"-"+ objectInJs.lastName;
//    }
//    console.log(objectInJs.getFullName());
//    // Price is primitive and price2 is Number object
//    var price1 = 10;
//    var price2 = new Number('10');
//
//    console.log(price1 === price2);
//
//
//    console.log("The Sum is "+ 2*'10');
//
//
//    var namespace = {
//
//        function1: function(){
//            var today = new Date();
//            console.log("Today "+today);
//        },
//        simpleFunction: function(emailArg){
//            console.log("Original Email provided "+emailArg);
//            var email = (typeof emailArg !== 'undefined') ? emailArg : 'someone@email.com';
//            console.log("Email converted "+email);
//        }
//
//    };
//
//    namespace.function1();
//    namespace.simpleFunction("usaleemch@gmail.com");
//
    // Whats the difference between addEventListner and attachEvent
    // addEventListner doesnt work in IE9 so attachEvent
    // addEventListner will not override
//    var buttonElem = document.getElementById("myButton");
//    buttonElem.addEventListener("click",function(){
//        window.open("http://www.google.com","_blank");
//    });
//
//    // Define Constants
//    var CONSTANT_NAME = "constant value";
//
//    // JSON to String vice versa
//    var objectArr = ['Web','Java'];
//    // Object
//    console.log(typeof objectArr);
//    console.log(typeof null);
//
//    var objectJS = '{"name":"Usman","age":34}';
//    var converted = JSON.parse(objectJS));
//    console.log(converted);

//    var somevar;
//    console.log(somevar);
//    // Try to solve it
//    var Employee = function (name,company,salary){
//        //var self = this;
//        // Public Attributes created by this
//        this.name = name || "";
//        this.company = company || "";
//        this.salary = salary || 5000;
//
//        // Private Method created by var
//        var increaseSalary = function() {
//            console.log(this);
//            //self.salary = self.salary + 10000;
//            //how to access public method in private
//        }
//        // Public Method can access public
//        this.displaySalary = function() {
//            increaseSalary();
//            console.log(this.salary);
//        }
//    };
//
//    var emp = new Employee("Usman","Ezidebit",2000);
//    emp.displaySalary();


    // Closure
//    var outerFuncVar = "x";
//
//    (function innerFunction(innerArg){
//        var innerFunc = 'y';
//
//        console.log("Outer var"+outerFuncVar);
//        console.log("Inner var"+innerArg);
//        console.log("Inner Func var"+innerFunc);
//
//    }(7));

//    var technologyCopy = technologies;
//
//    //technologies = [];  - it will empty orignal one and NOT the referenced one
//    //technologies.length = 0;  // will empty the all referenced
//    //technologies.splice(0,technologies.length);
//    while(technologies.length){
//        technologies.pop();
//    }
//
//    console.log(technologies);
//    console.log(technologyCopy);
//
//
//    function mul(x){
//        return function(y){
//            return function(z){
//                return x*y*z;
//            }
//        }
//    }
//
//    console.log(mul(3)(3)(3));

    // Check type of array or object
    // typeOf

//    var obj ={foo:1};
//    var x = Object.create(obj);
//
//    var output = (function() {
//
//        delete x.foo;  // Delete operator deletes the property of object | Delete doesnt delete prototype property
//
//        return x.foo;   // will become undefined
//
//    })();
//
//    console.log(output);

//    var bar = true;
//
//    console.log(bar + 0);      // Boolean + Addition = Addition
//    console.log(bar + "xyz"); // Boolean + String = Concatenation
//    console.log(bar + true);  // true = 1  - Boolean + Boolean = Addition
//    console.log(bar + false); // false = 0 -
//
//    var z = 1, y = z = typeof y;  // Associativity rule is Right to Left
//    console.log("value of "+z);
//

//    var simple = function (){
//        console.log("Simple Function");
//    }
//    console.log(typeof simple());

    // Hoisting

    function test(){
        var a;
        function foo(){
            return 2;
        }
        console.log(a);
        console.log(foo());

        a=1;
    }
    test();

    //x = 6;  // Runtime error if use strict is used

    function foo1(){
        return {
            bar:"hello"
        };
    }
    function foo2(){
        return // automatically semi colon is applied
        {
            bar:"hello"
        };
    }
//    console.log(foo1());
//    console.log(foo2()); // undefined
//
//
//    console.log(0.1+0.2);
//    console.log(0.1+0.2===0.3);
//
//    function isInteger(x) {
//        return (typeof x === 'number') && ( x%1 === 0);
//    }
//    console.log(isInteger(4));
//    console.log(isInteger(14));
//    console.log(isInteger("dasda"));

    function checkTypeOf(x){
        console.log(typeof x);
    }

    var bar = {

    }

    checkTypeOf(12); // Number
    checkTypeOf("12"); // String
    checkTypeOf("Usman"); // String
    checkTypeOf([]); // Object array
    checkTypeOf(bar); // object
    checkTypeOf(null); // null

    // (typeof x === "number") && (x%1 == 0)

//    (function(){
//        console.log(1);
//        setTimeout(function(){console.log(2)},1000);
//        setTimeout(function(){console.log(3)},0);
//        console.log(4);
//
//    })();
//
    // Kayak | Radar | Level - Palindrome


//    function sum(x){
//        if (arguments.length == 2){
//            return arguments[0]+arguments[1];
//        }else {
//            return function(y){
//                return x+y;
//            }
//        }
//
//    }
//    console.log(sum(2)(3));
//    console.log(sum(2,3));
//
//    var arr1 = 'john'.split(''); // split and assigns array
//    var arr2 = arr1.reverse();   // nhoj
//    var arr3 = "jones".split('');
//    arr2.push(arr3)   // nhoj jones  // Note the whole array is pushed to last index of array
//
//    console.log(arr1.length); //4
//    console.log(arr1);
//    //console.log(arr1.slice(-1)); // n
//
//    //console.log(arr2.length); //9
//    //console.log(arr2.splice(-1)); //s
//
//
//    console.log(1+"2"+"2");
//    console.log(1+ +"2" + "2");  // 32 because in +2 + is treated as unary operator and typecast string to number


//    for (var x =0; x < 5 ; x++){
//
//        /*
//        Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows
//        */
//        (function(x){
//
//            setTimeout(function(){
//                console.log(x);
//            },x*1000);
//
//        }(x));
//
//    }
//
//    /*
//    The triple-equal operator === behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value. The double-equal operator, however, tries to coerce the values before comparing them. It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.
//    */
//    console.log(false == "0");
//    console.log(false === "0");
//
//    // Factorial
//    function f(x){
//        return (x >1)? x * f(x-1):x;
//    }
//    console.log(f(10));
//
//
//    // Closure again
//
//    (function(x){
//
//        return (function(y){
//            console.log(x);
//        }(2))
//
//    }(1));
//
//
//    function Traverser(p_element,p_callback){
//        p_callback(p_element);
//
//        var list = p_element.children;
//
//        for (var i = 0 ; i < list.length; i++){
//            Traverser(list[i]),p_callback);
//        }
//
//    }

    //Q1 use strict  - b is not defined
    // no strict - 5
//    (function(){
//        var a = b = 5;
//
//    })();
//    console.log(b);
//
//    String.prototype.repeatify = String.prototype.repeatify || function(times){
//        var str = '';
//        for (var i = 0 ; i < times ; i++)
//        {
//          str += this;
//        }
//        return str;
//    }
//
//    console.log("hello".repeatify(5));

    var name="Saleem";

    var Obj = {

        fullName:'Usman Chodahry',

        getFullName:function(){
            return this.fullName;
        }
    }

    console.log(Obj.getFullName());

    var test = Obj.getFullName;

    console.log(test.call(Obj));

}());
