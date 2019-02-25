/* == Binary Calculator == */
/* ======================= */

// A HackerRank Challenge - 10 Days of JavaScript > Day 9

var newDecimal = "";
var newBinary = "";
var operator = false;
var usedOperator = "";
var binaryOne ="";
var binaryTwo = "";
var decimal = "";
var decimalOne = "";
var decimalTwo = "";

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
     decimalTwo = parseInt(binaryTwo,2);
     decimal = decimalOne + usedOperator + decimalTwo;
  } else {
     binaryOne = binaryOne + x;
     decimalOne = parseInt(binaryOne,2);
     decimal = decimalOne;
  }
  updateHTML(newBinary, decimal);
}

function displayOperator(x) {
   // If entry is an operator
   if (operator == false) {
      newBinary = newBinary + x ;
      decimal = decimalOne + x;
      updateHTML(newBinary, decimal);
      usedOperator = x;
      operator = true;
   }
}

function updateHTML (binary, decimal) {
   // Show in display > id: res & converted
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

   updateHTML(finalResult, convertResult);
   resetVariables();
}

function clearRes() {
   // Clear all settings to beginning
   document.querySelector("#res").textContent = "";
   document.querySelector("#converted").textContent = "";
   resetVariables();
}

function resetVariables() {
   newBinary = "";
   binaryOne = "";
   binaryTwo = "";
   decimal = "";
   decimalOne = "";
   decimalTwo = "";
   operator = false;
   usedOperator = "";
}