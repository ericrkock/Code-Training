/* JavaScript Calculator */

// A FreeCodeCamp Project Challenge
// Prsesented by Eric R. Kock - Feb. 2019

// Still to do
// - Buzz on error
// - Backspace
// - Equal


var resultDisplay = "";
var chainDisplay = "";
var previousKeyUsed = "";
var tempChainDisplay;
var decimalUsed = false;
var isOperator = false;



function padClicked(obj) {
   var keyID = obj.id;
   var keyValue = obj.value;

   console.log( "Clicked : ID: ", keyID, " - Value: ", keyValue);
   if (keyValue == "digit") tempDisplayDigit(keyID);
   if (keyValue == "decimal") displayDecimal();
   if (keyValue =="operator") tempDisplayOperator(keyID);
}


function tempDisplayDigit(x) {
   if (x == "zero") displayDigit("0");
   if (x == "one") displayDigit("1");
   if (x == "two") displayDigit("2");
   if (x == "three") displayDigit("3");
   if (x == "four") displayDigit("4");
   if (x == "five") displayDigit("5");
   if (x == "six") displayDigit("6");
   if (x == "seven") displayDigit("7");
   if (x == "eight") displayDigit("8");
   if (x == "nine") displayDigit("9");
}

function tempDisplayOperator(x) {
   if (x == "clear") resetDisplay();
   if (x == "backspace") backspaceDisplay();
   if (x == "equal") finalResult();

   if (x == "add") displayOperator("+");
   if (x == "substract") displayOperator("-");
   if (x == "multiply") displayOperator("x");
   if (x == "divide") displayOperator("/");
}

function displayDigit(x) {
   if (resultDisplay != 0 || x != 0) {
      if (previousKeyUsed == "operator") {
         chainDisplay = tempChainDisplay;
         decimalUsed = false;
      }
      resultDisplay = resultDisplay + x;
      chainDisplay = chainDisplay + x;
      updateHTML(chainDisplay, resultDisplay);
      previousKeyUsed = "digit";
   }
   console.log("66 Digit Chain & Result : ",chainDisplay, " ", resultDisplay)
}

function displayDecimal() {
   console.log("70 Digit Chain & Result : ",chainDisplay, " ", resultDisplay)
   if (!decimalUsed && previousKeyUsed != "operator") {
      if (resultDisplay == 0) {
         chainDisplay = "0.";
         resultDisplay = "0.";
      } else {
         chainDisplay = chainDisplay + ".";
         resultDisplay = resultDisplay + ".";
      }
      decimalUsed = true;
      previousKeyUsed ="decimal";
   } else {
      //chainDisplay = tempChainDisplay;
      resultDisplay = tempResultDisplay;
   }
   updateHTML(chainDisplay, resultDisplay);
   console.log("83 Digit Chain & Result : ",chainDisplay, " ", resultDisplay)
}

function displayOperator(x) {
   if (previousKeyUsed != "decimal") {
      tempChainDisplay = chainDisplay + x;
      resultDisplay = x;
      tempResultDisplay = x;
      updateHTML(tempChainDisplay, resultDisplay);
      previousKeyUsed = "operator";
      resultDisplay = "";
   }
   console.log("94 Digit Chain : ",chainDisplay, " Result: ", resultDisplay)
}

function backspaceDisplay() {
   // Remove last key pressed
   updateHTML("Back Space: Remove last key pressed", "Coming Soon");
}

function finalResult() {
   if (previousKeyUsed != "decimal" && previousKeyUsed != "operator") {
      // Show Mathematical result
   }
   updateHTML("Final Result","Coming Soon");
}

function updateHTML(chain, result) {
   document.querySelector("#chain").textContent = chain;
   document.querySelector("#result").textContent = result;
}

function resetDisplay() {
   console.log("Reset Done!")
   chainDisplay = "";
   resultDisplay = "";
   previousKeyUsed = "";
   decimalUsed = false;
   isOperator = false;
   document.querySelector("#chain").textContent = "«";
   document.querySelector("#result").textContent = "0";
}

/*
var chain = "";
var result = "";
let decimal = false;
var calculation = "";
var operator = false;
var prevO = "empty";

// Assign Screen Numbers & Operators to an EventListener and Respective Function
document.querySelector('#zero').addEventListener('click', keyZero); function keyZero() {numberKey(0); activeKey("#zero")}
document.querySelector('#one').addEventListener('click', keyOne); function keyOne() {numberKey(1); activeKey("#one")}
document.querySelector('#two').addEventListener('click', keyTwo); function keyTwo() {numberKey(2); activeKey("#two")}
document.querySelector('#three').addEventListener('click', keyThree); function keyThree() {numberKey(3); activeKey("#three")}
document.querySelector('#four').addEventListener('click', keyFour); function keyFour() {numberKey(4); activeKey("#four")}
document.querySelector('#five').addEventListener('click', keyFive); function keyFive() {numberKey(5); activeKey("#five")}
document.querySelector('#six').addEventListener('click', keySix); function keySix() {numberKey(6); activeKey("#six")}
document.querySelector('#seven').addEventListener('click', keySeven); function keySeven() {numberKey(7); activeKey("#seven")}
document.querySelector('#eight').addEventListener('click', keyEight); function keyEight() {numberKey(8); activeKey("#eight")}
document.querySelector('#nine').addEventListener('click', keyNine); function keyNine() {numberKey(9); activeKey("#nine")}

document.querySelector('#clear').addEventListener('click', actionClear); function actionClear() {clearOperator(); activeKey("#clear")}
document.querySelector('#equal').addEventListener('click', actionEqual); function actionEqual() {equalOperator(); activeKey("#equal")}
document.querySelector('#add').addEventListener('click', actionAdd); function actionAdd() {operatorKey("A"); activeKey("#add")}
document.querySelector('#substract').addEventListener('click', actionSubstract); function actionSubstract() {operatorKey("S"); activeKey("#substract")}
document.querySelector('#multiply').addEventListener('click', actionMultiply); function actionMultiply() {operatorKey("M"); activeKey("#multiply")}
document.querySelector('#divide').addEventListener('click', actionDivide); function actionDivide() {operatorKey("D"); activeKey("#divide")}
document.querySelector('#decimal').addEventListener('click', actionDecimal); function actionDecimal() {decimalKey("."); activeKey("#decimal")}
document.querySelector('#backspace').addEventListener('click', actionBackspace); function actionBackspace() {backspaceOperator(); activeKey("#backspace")}

// Assign Keyboard Numbers & Operators to Respective Function
document.addEventListener("keydown", key_pressed);

function activeKey(activeHover) {
   document.querySelector(activeHover).classList.add('active');
   setTimeout(function() {
       document.querySelector(activeHover).classList.remove('active');
   }, 200);
}

function key_pressed(e) {
   let k = e.which || e.keyCode;
   if (k == 96 || k == 48) actionZero();         // 0
   if (k == 97 || k == 49) actionOne();          // 1
   if (k == 98 || k == 50) actionTwo();          // 2
   if (k == 99 || k == 51) actionThree();        // 3
   if (k == 100 || k == 52) actionFour();        // 4
   if (k == 101 || k == 53) actionFive();        // 5
   if (k == 102 || k == 54) actionSix();         // 6
   if (k == 103 || k == 55) actionSeven();       // 7 
   if (k == 104 || k == 56) actionEight();       // 8
   if (k == 105 || k == 57) actionNine();        // 9
   if (k == 110 || k == 190) actionDecimal();    // . (decimal)
   if (k == 13) actionEqual();                   // = (equal)
   if (k == 107 || k == 171) actionAdd();        // Add
   if (k == 109 || k == 173) actiontSubstract(); // Substract
   if (k == 106) actiontMultiply();              // Multiply
   if (k == 111) actiontDivide();                // Divide
   if (k == 46) actionClear();                   // Clear
   if (k == 8) actionBackspace();                // Backspace
}

// Functions
function numberKey(digit) {
   action(digit);
   prevO = "digit";
}

function decimalKey() {
   if (decimal == false) action("."); decimal = true;
}

function action(x) {
   result = result + String(x);
   chain = chain + String(x);
   displayNumber();
}

function displayNumber() {
   document.getElementById("result").textContent = result;
   document.getElementById("chain").textContent = chain;
}

function operatorKey(o) {
   if (o == "A") op = "+";
   if (o == "S") op = "-";
   if (o == "M") op = "*";
   if (o == "D") op = "/";
   if (operator == true || prevO != o) {
      calculation = result;
      result = "";
      if (prevO != "operator") {
         action(op);
         prevO = "operator";
      } else {
         result = op;
         displayNumber();
      }
      operator = false;
   }
   console.log(parseInt(calculation));
}


function clearOperator() {
   document.getElementById("chain").textContent = "«";
   document.getElementById("result").textContent = "0";
   result = "";
   decimal = false;
   operator = false;
   prevO = "empty";
}
*/