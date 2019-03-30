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
pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);
function pairwise(arr, arg) {
   this.objects = [];
   var total = 0;

   function Element(value, index) {
      this.value = value;
      this.index = index;
      this.used = 0;
   }

   for (var i = 0; i < arr.length; i++) {
      this.objects.push(new Element(arr[i], i));
   }

   for (var j = 0; j < objects.length; j++) {
      if (objects[j].used === 0) {
         for (var k = 0; k < objects.length; k++) {
            if (objects[k].used === 0 && objects[k].index != objects[j].index) {
               if (arg - objects[j].value == objects[k].value) {
                  total = total + objects[j].index + objects[k].index;
                  objects[j].used = 1;
                  objects[k].used = 1;
                  break;
               }
            }
         }
      }
   }
   console.log(total);
   return total;
}
// Implement Bubble Sort
// Implement Selection Sort
// Implement Insertion Sort
// Implement Quick Sort
// Implement Merge Sort

