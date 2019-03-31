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

//No Repeats Please
//permAlone('aab');        // Should return 2 > OK
//permAlone("aaa");        // Should return 0 > OK
//permAlone("aabb");       // Should return 8 > OK
//permAlone("abcdefa");    // Should return 3600 > OK
//permAlone("abfdefa");    // Should return 2640 > OK
//permAlone("zzzzzzzz");   // Should return 0 > OK
//permAlone("a");          // Should return 1 > OK
//permAlone("aaab");       // Should return 0 > OK
//permAlone("aaabb");      // Should return 12 > OK
function permAlone(str) {
   var permutations = permutateWithoutRepetitions(str);
   var validPermutations = 0;
   for (let i = 0; i < permutations.length; i++) {
      if (countDoubles(permutations[i]) == false) {
         validPermutations++;
      }
   }
   console.log(permutations.length);
   console.log(validPermutations);
   return validPermutations;
}
function permutateWithoutRepetitions(permutationOptions) {
   if (permutationOptions.length === 1) {
      return [permutationOptions];
   }

   // Init permutations array.
   const permutations = [];

   // Get all permutations for permutationOptions excluding the first element.
   const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));

   // Insert first option into every possible position of every smaller permutation.
   const firstOption = permutationOptions[0];

   for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
      const smallerPermutation = smallerPermutations[permIndex];

      // Insert first option into every possible position of smallerPermutation.
      for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
         const permutationPrefix = smallerPermutation.slice(0, positionIndex);
         const permutationSuffix = smallerPermutation.slice(positionIndex);
         permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
      }
   }
   return permutations;
}
function countDoubles(str) {
   for(var i = 1; i < str.length; i++) {
         if(str[i] == str[i-1]) {
            console.log(str, "doubles", i,str[i], str[i-1]);
            return true;
         }
   }
   console.log(str, "NO doubles");
   return false;
}

// Pairwise
//pairwise([1,4,2,3,0,5], 7);
//pairwise([1, 3, 2, 4], 4);
//pairwise([1, 1, 1], 2);
//pairwise([0, 0, 0, 0, 1, 1], 1);
//pairwise([], 100);
function pairwise(arr, arg) {
   return arr.reduce(function(acc, next, index, array) {
      for (let i = index + 1; i < array.length; i++) {
         if (array[index] + array[i] === arg) {
            acc += index + i;
            array[index] = array[i] = NaN;
         }
      }
      //console.log(acc);
      return acc;
   }, 0);
}

// Implement Bubble Sort
//bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
function bubbleSort(array) {
   // change code below this line
   var temp = 0;
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
         if (array[j] > array[j + 1]) {
            temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
         }
      }
   }
   //console.log("Sorted Array ", array);
   // change code above this line
   return array;
 }

// Implement Selection Sort
//selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
function selectionSort(array) {
   // change code below this line
   for ( let i = 0; i < array.length - 1; i++) {
      let smallest = i;
      for ( let j = i + 1; j < array.length; j++) {
         if (array[smallest] > array[j]) {
            smallest = j;
         }
      }
      var temp = array[i];
      array[i] = array[smallest];
      array[smallest] = temp;
   }
   console.log(array);
   // change code above this line
   return array;
 }

// Implement Insertion Sort
//insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
function insertionSort(array) {
   // change code below this line
   // Iterate through our array
   for (var i = 1, value; i < array.length; i++) {
      // Our array is split into two parts: values preceeding i are sorted, while others are unsorted
      // Store the unsorted value at i
      value = array[i];
      // Interate backwards through the unsorted values until we find the correct location for our `next` value
      for (var j = i; array[j-1] > value; j--) {
            // Shift the value to the right
         array[j] = array[j-1];
      }
      // Once we've created an open "slot" in the correct location for our value, insert it
      array[j] = value;
   }
   // Return the sorted array
   console.log(array);
   // change code above this line
   return array;
 }

// Implement Quick Sort
// Implement Merge Sort

