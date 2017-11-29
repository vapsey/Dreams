# ccs-js-project-template
CCS Project JS + HTML Template

#Topics
- [Data Types](#data-types)
  - [Strings](#strings  )
  - [Booleans](#booleans)
  - [Integers](#integers)
- [Variables](#variables)
- [Operators](#operators)
  - [Arithmetic Operators](#arithmetic-operators)  
  - [Assignment Operators](#assignment-operators)
  - [String Operators](#string-operators)
  - [Adding Strings and Numbers](#adding-strings-and-numbers) 
- [Functions](#functions)
  - [Function Statement](#function-statement)
  - [Function Expression](#function-expression)
- [Conditions](#conditions)
  - [Comparison and Logical Operators](comparison-and-logical-operators)
  - [If Else Statements](#if-else)
  - [Switch](#switch)
- [jQuery Basics](#jquery-basics)
  - [Selectors](#selectors)
  - [Events](#events)


##Data Types
A data type defines the structure of data that will be stored in an object (variable) of that type. A variable is a named instance of that data type. JS variables can hold many data types such as numbers, strings, arrays, objects and more. 


###Strings
Used for storing and manipulating text
```javascript
"Kikko"
"Kikko Paradela"
"Hello" + "world"
```

###Booleans
Used for representing one of two values: true or false
```javascript
10 > 9
10 === 10
```


###Integers
Used for storing numbers
```javascript
10
3.14
4*10
```

##Variables
Containers for storing data type values
```javascript
var student = "Kikko";
var age = 18;
var student = false;
```

##Operators

###Arithmetic Operators
| Operator | Description |
| --- | :--- |
| + | addition |
| - | subtraction |
| * | multiplication |
| / | division |
| % | modulus |
| ++ | increment |
| -- | decrement |

```javascript
var a = 3;
var b = 5;
var c = a + b;
console.log(c) // Prints: 8

var d = 10;
d++;
console.log(d) // Prints: 11
``` 


###Assignment Operators
| Operator | Example |
| --- | :--- |
| + | x = y |
| += | x = x + y |
| -= | x = x - y |
| *= | x = x * y |
| /= | x = x / y |
| %= | x = x % y |

```javascript
var a = 10;
a += 5; //10 + 5 = 15

console.log(a) // Prints: 15
``` 

###String Operators
```javascript
var firstName = "Kikko";
var lastName = "Paradela";
var completeName = firstName + " " + lastName;

console.log(completeName) // Prints: Kikko Paradela


var greeting = "Hi ";
greeting += "Shaq";

console.log(greeting) // Prints: Hi Shaq
``` 


###Adding Strings and Numbers
```javascript
x = 10 + 10;
y = "10" + 10;
z = "hi" + 10;

// Output: 
// 20
// 1010
// hi10
``` 


##Functions
Block of code designed to perform a particular task. There are two common ways we can create a function:

###Function Statement
```javascript
// Define the function
function sayHello() {
  console.log("Hello world!")
}

// Run function
sayHello(); // Prints: Hello World!
```

###Function Expression
```javascript
var sayHello = function() {
  console.log("Hello world!")
}

sayHello(); // Prints: Hello World!
```

###Arguments
```javascript
function sayHello(student) {
  console.log("Hello " + student)
}

sayHello("Kikko"); // Prints: Hello Kikko
```

You can also use multiple arguments
```javascript
function sayHello(student, yourName) {
  console.log("Hello " + student + "! My name is " + yourName + ".");
}

sayHello("Shaq", "Kikko"); // Prints: Hello Shaq! My name is Kikko.
```


##Conditions
Conditios are used to perform different actions for different decisions.

###Comparison and Logical Operators
Comparison operators are used in logical statements to determine equality or difference between variables or values. They can be used in conditional statements to compare values and take action depending on the result.

| Operator | Description |
| --- | :--- |
| == | equal to |
| === | equal value and equal type |
| != | not equal |
| !== | not equal value or not equal type |
| > | greater than |
| < | less than |
| >= | greater than or equal to	 |
| <= | less than or equal to |


###If Else
Used to specify a block of code to be executed if a condition is true

```javascript
var realLife = false;

if (realLife == true) {
  console.log("Life is real")
} else {
  console.log("Don't be trippin")
}

// Prints: Don't be trippin
```

```javascript
var student = "Kikko";

if (student == "Kikko") {
  console.log("Hello world!")
  // Returns: Kikko is a student
}
```




###Switch
Used to perform different actions based on different conditions.
```javascript
var student = "Shaq";

switch (student) {
    case "Kikko":
        console.log("Student is Kikko");
        break;
    case "Shaq":
        console.log("Whoa Shaq is a student");
        break;
    case "Kobe":
        console.log("Kobe is a student?");
}

// Prints: Whoa Shaq is a student
```

```javascript
var currentYear = 2016;
var aniversary = 2013;

switch (currentYear - aniversary) {
    case "1":
        console.log("Happy 1 year!");
        break;
    case "2":
        console.log("Happy 2 years!");
        break;
    case "3":
        console.log("Happy 3 years!");
        break;
    case "4":
        console.log("Happy 4 years!");
}

// Prints: Happy 3 years!
```




##jQuery Basics

###Selectors
```javascript
$("p")      // Finds the p element
$(".box")   // Finds element(s) with a box class
$("#shaq")  // Finds element with the shaq id name
```

###Events
```javascript
```


###Load your JS file(s) into your HTML
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1>Hello World!</h1>
    <script type='text/javascript' src='scripts/script.js'></script>
  </body>
</html>
```
