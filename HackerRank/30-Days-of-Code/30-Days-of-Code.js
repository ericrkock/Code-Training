// HackerRank Challenges
// 30 Days of Code

// Day 0 : Hello, World
//processData("Welcome to 30 Days of Code!");
function processData(inputString) {
   // This line of code prints the first line of output
   console.log("Hello, World.");
   console.log(inputString);
   // Write the second line of output that prints the contents of 'inputString' here.
}

// Day 1 : Data Types
function main() {
   var i = 4
   var d = 4.0
   var s = "HackerRank "
   // Declare second integer, double, and String variables.
      var x = 0;
      var y = 0.0;
      var z = "";
   // Read and save an integer, double, and String to your variables.
      x = parseInt(readLine());
      y = parseFloat(readLine());
      z = readLine();
   // Print the sum of both integer variables on a new line.
      console.log(i + x);
   // Print the sum of the double variables on a new line.
      console.log(parseFloat(d + y).toFixed(1));
   // Concatenate and print the String variables on a new line
   // The 's' variable above should be printed first.
      console.log(s + z);
}

// Day 2 : Operators
//solve(12.9,20,8);
function solve(meal_cost, tip_percent, tax_percent) {
   var cost = meal_cost;
   var tip = cost * (tip_percent/100);
   var tax = cost * (tax_percent/100);
   var totalCost = Math.round(cost + tip + tax);
   console.log(totalCost);
   return totalCost;
}

// Day 3 : Intro to Conditional Statements
//main();
function main() {
   //const N = parseInt(readLine(), 10);
   const N = 33;
   let x = N % 2;

   if (x == 0 && (N < 6 || N > 20)) {
      console.log("Not Weird");
   } else {
      console.log("Weird");
   }
}

// Day 4 : Class vs Instance
// Day 5 : Loops
// Day 6 : Let's Review
// Day 7 : Arrays
// Day 8 : Dictionaries and Maps
// Day 9 : Recursion 3
// Day 10 : Binary Numbers
// Day 11 : 2D Arrays
// Day 12 : Inheritance
// Day 13 : Abstract Classes
// Day 14 : Scope
// Day 15 : Linked List
// Day 16 : Exceptions - String to integer
// Day 17 : More exceptions
// Day 18 : Queues and Stacks
// Day 19 : Interfaces
// Day 20 : Sorting
// Day 21 : Generics
// Day 22 : Binary Search Trees
// Day 23 : BST Level*Order Traversal
// Day 24 : More Linked List
// Day 25 : Running Time and Complexity
// Day 26 : Nested Logic
// Day 27 : Testing
// Day 28 : RegEx, Patterns, and Intro to Databases
// Day 29 : Bitwise AND
