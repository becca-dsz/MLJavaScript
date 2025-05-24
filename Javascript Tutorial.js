/*
This is a multi-line comment.
It can span several lines
*/
console.log("Hello World!");
// Prints Hello, World! to the console

// JavaScript Numbers can be written with or without decimals
// JavaScript Strings are text that can be written in single or double quotes

let num1 = 50;
let num2 = 50.05;

let str1 = "Geek";
let str2 = "Geeks";

console.log(num1);
console.log(num2);
console.log(str1);
console.log(str2);

// A JavaScript variable is the simple name of the storage location where data is stored
// Local var: Declare a var inside of a block or function
// Global var: Declare a var outside function or with a window object

// Declare a variable and initialize it
// Global variable declaration
let Name = "Apple";

// Function definition
function MyFunction() {
  // Local variable declaration
  let num = 45;

  // Display the value of Global variable
  console.log(Name);

  // Display the value of local var
  console.log(num);
}

// Function call
MyFunction();

// Javascript operators are symbols that are used to compute the value or in other words, we can perform operations on operands
// Arithmetic operators (=,-,*,/) are used to compute the value, and Assignment operators (=,+=,%=) areused to assign the values to vars

// Var Declarations
let a, b, add;

// Assign value to the var
a = 3;
b = 23;

// Use arithmetic operator to
// add two numbers
add = a + b;

console.log(add);

// JavaScript Expression is the combination of values, operators, and vars
// It is used to compute the values

// Variable Declarations
let x, y, num3, sum;

// Assign value to the variables
x = 20;
y = 30;

// Expression to divide a number
num3 = x / 2;

// Expression to add two numbers
sum = x + y;

console.log(num3 + "\n" + sum);

// Case sensitive
