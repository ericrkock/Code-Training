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
//updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
function updateInventory(arr1, arr2) {
   if (arr1.length == 0) {   // When arr1 is empty
      sortArray(arr2);
      console.log(arr2);
      return arr2;
   } else if (arr2.length == 0) {   // When arr2 is empty
      return arr1;
   } else {
      arr2.forEach(function(valueToFind) {
         let exist = -1;
         arr1.forEach(function(value) {
            if (value[1] == valueToFind[1]) {
               exist = 1 ;
               value[0] = value[0] + valueToFind[0];
            } 
         });
         if (exist == -1) {
            arr1.push(valueToFind);
         }
      });
   }
   sortArray(arr1);
   return arr1;
}
function sortArray(arrToSort) {
   // Sort the array
   arrToSort = arrToSort.sort(function(a, b) {
      if (a[1] > b[1]) {
         return 1;
      } else {
         return -1;
      }
   });
   return arrToSort;
}


// No Repeats Please
// Pairwise
// Implement Bubble Sort
// Implement Selection Sort
// Implement Insertion Sort
// Implement Quick Sort
// Implement Merge Sort

