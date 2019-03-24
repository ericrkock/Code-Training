/* HackerRank Challenges */
/*    30 Days of Code    */
/* ===================== */ 

// Day 0 : Hello, World - Easy
//processData("Welcome to 30 Days of Code!");
function processData(inputString) {
   // This line of code prints the first line of output
   console.log("Hello, World.");
   console.log(inputString);
   // Write the second line of output that prints the contents of 'inputString' here.
}

// Day 1 : Data Types - Easy
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

// Day 2 : Operators - Easy
//solve(12.9,20,8);
function solve(meal_cost, tip_percent, tax_percent) {
   var cost = meal_cost;
   var tip = cost * (tip_percent/100);
   var tax = cost * (tax_percent/100);
   var totalCost = Math.round(cost + tip + tax);
   console.log(totalCost);
   return totalCost;
}

// Day 3 : Intro to Conditional Statements - Easy
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

// Day 4 : Class vs Instance - Easy
//Person(13);
function Person(initialAge){
   // Add some more code to run some checks on initialAge
   if (initialAge >= 0) {
       let age = initialAge;

   } else {
       initialAge = 0;
       console.log("Age is not valid, setting age to 0.");
   }
 this.amIOld=function(){
  // Do some computations in here and print out the correct statement to the console
       if (initialAge < 13) {
           console.log("You are young.");
       } else if (initialAge >= 13 && initialAge < 18) {
           console.log("You are a teenager.");
       } else {
           console.log("You are old.");
       }
   };

  this.yearPasses=function(){
         // Increment the age of the person in here
      initialAge = initialAge + 1;
  };
}

// Day 5 : Loops - Easy
//multiplying(2);
function multiplying(n) {
   var arr = [];
   for (let i = 1; i <= 10; i++) {
       console.log(n + " x " + i + " = " + (n * i));
   }
}

// Day 6 : Let's Review - Easy
//processData([2,"Hacker","Rank"]);
function processData(input) {
   //Enter your code here
   var temp = input.split('\n');
   for (let i = 1; i < temp.length; i++) {
       var left = "";
       var right = "";
       for (let j = 0; j < temp[i].length; j++) {
           if (j % 2 == 0) {
               left = left + temp[i].slice(j, j + 1);
           }
           if (j % 2 == 1) {
               right = right + temp[i].slice(j, j + 1);
           }
       }
       console.log(left + " " + right);
   }  

   /* let inputCopy = input.split('\n').slice(1);
   console.log(inputCopy);
   inputCopy.forEach((str) => {
      let evenStr = "";
      let oddStr = "";
      for (let i = 0; i < str.length; i++) {
         i%2 ? oddStr += str[i] : evenStr += evenStr[i];
      }
      //console.log('${evenStr} ${oddStr}');
      console.log(evenStr + "  " + oddStr);
   }); */
} 

// Day 7 : Arrays - Easy
//main([1,4,3,2]);
function main(arr) {
   //const n = parseInt(readLine(), 10);
   //const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
   var newArr = "";
   for (let i = arr.length - 1; i >= 0; i--) {
       if (i != 0) {
           newArr = newArr + arr[i] + " ";
       } else {
           newArr = newArr + arr[0];
       }
   }
   console.log(newArr);
   return newArr;
}

// Day 8 : Dictionaries and Maps - Easy
//processData([3, ["sam 99912222", "tom 11122222", "harry 12299933", "sam", "edward", "harry"]]);
function processData(input) {
   var lines = input.split('\n').reverse(),
      num_lines = parseInt(lines.pop(),10);

   let dict = {},
      entry = "",
      name = "";

   for(let i = 0; i < num_lines; i++) {
      entry = lines.pop().split(' ');
      dict[entry[0]] = entry[1];
   }
   while(lines.length) {
      name = lines.pop();
      if(name in dict) {
         console.log(name + "=" + dict[name]);
      } else {
         console.log("Not found");
      }
   }
} 

// Day 9 : Recursion 3 - Easy
//factorial(3);
function factorial(n) {
   if (n == 1) {
      console.log(n);
      return n;
   } else {
      console.log(n * factorial(n - 1));
      return n * factorial(n - 1)
   }

   /* Short Version
      return (n == 1 ? n * factorial(n - 1) : n) 
   */
}

// Day 10 : Binary Numbers - Easy
//main(5);
//main(6);
function main(n) {
   //var n = parseInt(readLine());
   var bin = "";
   var currentValue;
   var max = 0;
   var count = 0;
   while (n > 0) {
       currentValue = (n / 2) % 1 === 0 ? "0" : "1";
       currentValue === "1" ? count++ : count = 0;
       if (count > max) max = count;       
       bin = currentValue + bin;
       n = Math.floor(n/2);
   }
   console.log(max);
}

// Day 11 : 2D Arrays - Easy >> Same as Preparation Kit: Arrays: 2D Array DS
//hourglassSum([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]);
//hourglassSum([[-1,1,-1,0,0,0],[0,-1,0,0,0,0],[-1,-1,-1,0,0,0],[0,-9,2,-4,-4,0],[-7,0,0,-2,0,0],[0,0,-1,-2,-4,0]]);
//hourglassSum([[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0,]]);
function hourglassSum(arr) {
   maxSum = [];
   sumHourGlass = 0;
   for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
         sumHourGlass = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
         maxSum.push(sumHourGlass);
      }
   }
   console.log(Math.max(...maxSum));
   return Math.max(...maxSum);
}

// Day 12 : Inheritance - Easy
class Persons {
   constructor(firstName, lastName, identification) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.idNumber = identification;
   }
   
   printPerson() {
       console.log(
           "Name: " + this.lastName + ", " + this.firstName 
           + "\nID: " + this.idNumber
       )
   }
}
class Student extends Persons {
   /*	
   *   Class Constructor
   *   
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
   // Write your constructor here
   constructor(firstName, lastName, identification, score) {
       super(firstName, lastName, identification)
       this.score = score
   }
   /*	
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
   // Write your method here
   calculate() {
       let avg = this.score.reduce(calc) / this.score.length
       if (avg >= 90) {
           return 'O'
       } else if (avg >= 80) {
           return 'E'
       } else if (avg >= 70) {
           return 'A'
       } else if (avg >= 55) {
           return 'P'
       } else if (avg >= 40) {
           return 'D'
       } else {
           return 'T'
       }
   }
}
function calc(score1, score2) {
   return score1 + score2;
}

// Day 13 : Abstract Classes - Easy
class Book {
   constructor(title, author) {
      if (this.constructor === Book) {
         throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
      }
      else {
         this.title = title;
         this.author = author;
      }
   }
   display() {
      console.log('Implement the \'display\' method!')
   }
}
class MyBook extends Book {
   // Write your constructor here
   constructor(title, author, price) {
       super(title, author);
       this.price = price;
   }
   // Write your method here
   display() {
       console.log("Title: " + this.title);
       console.log("Author: " + this.author);
       console.log("Price: " + this.price);
   }
}

// Day 14 : Scope - Easy (JS option not availble)
function computeDifference() {
   this.maximumDifference = Math.max(...this.elements) - Math.min(...this.elements);
   console.log(maximumDifference);
 }

// Day 15 : Linked List - Easy
function Solution() {
   var newNode = "";
   this.insert=function(head,data) {
      //complete this method
      newNode = new Node(data);     // Create a new node with the data passed in
      curNode = head;               // Set the current node as the passed in head
      if (curNode != null ) {       // If the current node is not null (it has values), walk the node list
         while (curNode.next != null) {
            curNode = curNode.next;
         }
         curNode.next = newNode;
      } else {                     // Otherwise, if the list is empty, return the created node
         head = newNode;
      }
      return head;
   };
}

// Day 16 : Exceptions - String to integer
function main(S) {
   //const S = readLine();
   try {
       var ans = parseInt(S) || ans.toString();
       console.log(parseInt(S));
   }
   catch (e) {
       console.log("Bad String");
   }
}

// Day 17 : More exceptions
class Calculator {
   power(n, p) {
     if (n < 0 || p < 0) {
       throw ('n and p should be non-negative');
     } else {
       return Math.pow(n, p);
     }
   }
   
 }

// Day 18 : Queues and Stacks
function Solution() {
   //Write your code here
   let stack = [];
   let queue = [];

   this.pushCharacter = function(a) {     // standard function syntax
      return stack.push(a);
   };
   this.enqueueCharacter = ((b) => {return queue.push(b)}); // short function syntax
   this.popCharacter = (() => {return stack.pop()});
   this.dequeueCharacter = (() => {return queue.shift()});
 }

// Day 19 : Interfaces - Easy
//divisorSum(8);
function divisorSum(n) {
   divisor = 1;
   if (n === 1 || n === 0) return n;
   for (let i = 2; i <= n/2; i++) {
      if (n % i === 0) {
         divisor += i;
      }
   }
   console.log(divisor + n);
   return divisor + n;
}

// Day 20 : Sorting - Easy
//main([1,2,3]);
//main([4,3,2,1]);
function main(a) {
   //a = readLine().split(' ');
   //a = n.split(' ');
   a = a.map(Number);

   // Write Your Code Here
   temp = 0;
   swap = 0;
   for (let i = 0; i < a.length; i++) {
      // Track number of elements swapped during a single array traversal
      let numberOfSwaps = 0;
      
      for (let j = 0; j < a.length - 1; j++) {
         // Swap adjacent elements if they are in decreasing order
         if (a[j] > a[j + 1]) {
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
            numberOfSwaps++;
            swap++;
         }
      }
      
      // If no elements were swapped during a traversal, array is sorted
      if (numberOfSwaps == 0) {
         break;
      }
   }
   console.log("Array is sorted in", swap, "swaps.");
   console.log("First Element: ", a[0]);
   console.log("Last Element: ", a[a.length-1]);
}

// Day 21 : Generics - Easy (Method not availble for JS) => JAVA8
/*
class Printer <T> {
   static <T> void printArray(T[] generic){
       for(T element : generic) {
           System.out.println(element); 
       }
   }
} */

// Day 22 : Binary Search Trees
// Day 23 : BST Level*Order Traversal
// Day 24 : More Linked List
// Day 25 : Running Time and Complexity
// Day 26 : Nested Logic
// Day 27 : Testing
// Day 28 : RegEx, Patterns, and Intro to Databases
// Day 29 : Bitwise AND
