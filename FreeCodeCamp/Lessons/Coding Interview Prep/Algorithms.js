/* CODING INTERVIEW PREP */
/*     FREECODECAMP      */
/* ===================== */

/* ALGORITHMS */
/* ========== */

// Find the Symmetric Difference
//sym([1, 2, 3], [5, 2, 1, 4]);
//sym([1, 2, 3, 3], [5, 2, 1, 4]);
//sym([1, 2, 3, 3], [5, 2, 1, 4, 5]);
//sym([1, 2, 5, 6], [2, 3, 5], [3, 4, 5])
function sym(args) {
   args = Array.prototype.slice.call(arguments);
   //console.log("Start Arrays: ", args);
   return args.reduce(function(acc, next) {
      acc = removeDuplicates(acc);
      next = removeDuplicates(next);
      acc = symDiff(acc, next);
      //console.log("Result: ",acc);
      return acc;
   });
 }
 function removeDuplicates(arr) {
   var noDuplicates = [];
   arr.forEach(function(value) {
      if (noDuplicates.indexOf(value) < 0) {
         noDuplicates.push(value);
      }
   });
   return noDuplicates;
 }
 function symDiff(step1, step2) {
   var newArr = step1.concat(step2);
   return newArr.filter(function(value, index, array) {
      if(array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1) {
         return value;
      }
   });
 }

// Inventory Update
//var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
//var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];
//updateInventory(curInv, newInv);
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
function updateInventory(arr1, arr2) {
   // All inventory must be accounted for or you're fired!
   console.log("Arr2 before sort: ", arr2);
   // Sort 2nd array

   arr2.sort(function(a, b) {
      a[1] = a[1].toString();
      b[1] = b[1].toString();
      console.log(a[1], " - ", b[1]);
      console.log(a[1]-b[1]);
      //return a[1] - b[1];
      
   });
   //console.log("Arr2 after sort", arr2);



   
   //return arr1;
}


var showIt = [
   ["nuCycleDate",19561100],
   ["ndCycleDate",19460700],
   ["neCycleDate",0],
   ["nlCycleDate",0]
 ];
 showIt.sort(function(a,b){
   return a[1] - b[1];
});
//console.log("ShowIt: ", showIt);

// No Repeats Please
// Pairwise
// Implement Bubble Sort
// Implement Selection Sort
// Implement Insertion Sort
// Implement Quick Sort
// Implement Merge Sort

