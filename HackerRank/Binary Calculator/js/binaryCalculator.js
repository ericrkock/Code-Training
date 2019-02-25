/* == Binary Calculator == */
/* ======================= */

// A HackerRank Challenge - 10 Days of JavaScript > Day 9


var newChallenge = "";

var newDecimal = "";
var newBinary = "";
var operator = false;
var usedOperator = "";
var binaryOne ="";
var binaryTwo = "";
var decimal

function padEntry(obj) {
   // Determ what the entry is and send to function
   var padValue = obj.value;
   if (padValue == "0") displayBinary(0);
   if (padValue == "1") displayBinary(1);
   if (padValue == "+") displayOperator("+");
   if (padValue == "-") displayOperator("-");
   if (padValue == "*") displayOperator("*");
   if (padValue == "/") displayOperator("/");
   
   if (padValue == "C") clearRes();
   if (padValue == "=") binaryCalculation();
}

function displayBinary(x) {
   // If entry = 0 or 1
  newBinary = newBinary + x;
  if (operator == true) {
     binaryTwo = binaryTwo + x;
  } else {
     binaryOne = binaryOne + x;
  }
  updateHTML(newBinary);
}

function displayOperator(x) {
   // If entry is an operator
   if (operator == false) {
      newBinary = newBinary + x ;
      updateHTML(newBinary);
      usedOperator = x;
      operator = true;
   }
}

function updateHTML (binary, decimal) {
   // Show in display > id: res
   document.querySelector("#res").textContent = binary;
   document.querySelector("#converted").textContent = decimal;
}

function binaryCalculation() {
   // Convert to Decimal
   convertOne = parseInt(binaryOne,2);
   convertTwo = parseInt(binaryTwo,2);
   
   // Calculation
   outCome = convertOne + usedOperator + convertTwo;
   convertResult = eval(outCome);
   var finalResult = convertResult.toString(2);

   updateHTML(finalResult);

   // Reset after calculation
   newChallenge = "";
   binaryOne = "";
   binaryTwo = "";
   operator = false;
}

function clearRes() {
   // Clear all settings to beginning
   document.querySelector("#res").textContent = "";
   document.querySelector("#res2").textContent = "";
   newChallenge = "";
   binaryOne = "";
   binaryTwo = "";
   operator = false;
}

/*
var binary1 = "11011";
var binary2 = "1000";
var som = parseInt(binary1,2)+ parseInt(binary2,2);
console.log("to string: ", parseInt(binary1,2)+ parseInt(binary2,2));
console.log("to Binary: ", som.toString(2));
*/