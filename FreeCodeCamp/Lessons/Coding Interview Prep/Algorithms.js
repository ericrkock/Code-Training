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
permAlone("aabb");       // Should return 8 > Still to solve
//permAlone("abcdefa");    // Should return 3600 > OK
//permAlone("abfdefa");    // Should return 2640 > OK
//permAlone("zzzzzzzz");   // Should return 0 > OK
//permAlone("a");          // Should return 1 > OK
//permAlone("aaab");       // Should return 0 > Still to solve
//permAlone("aaabb");      // Should return 12 > Still to solve
function permAlone(str) {
   if (str.length > 1) {
      const doubles = countDoubles(str);    // Check how many double chars in str
      
      let checkChar= str.charAt(0);             
      let uniqueChars = "";
      for (let i = 1; i < str.length; i++) {     // Check String has more than one unique character         
         uniqueChars = checkChar.search(str.charAt(i));
         uniqueChars >= 0 ? 0 : (checkChar +=  str.charAt(i)); 
      }
      if (checkChar.length > 1) {
         let falseCombinations = 0;
         let reverseFrac = 2;
         for (let i = (str.length-doubles); i < str.length; i++) {
            falseCombinations = falseCombinations + reverseFrac*factorial(i);
            reverseFrac++;
            console.log("i: ", i,"False Combis: ",falseCombinations);
         }
         console.log("Return: ", factorial(str.length)-falseCombinations);
         return factorial(str.length)-falseCombinations;
      } else {
         console.log("Return: ", 0);
         return 0;
      }
   } else {
      console.log("Return: ", 1);
      return 1;
   }
 }

function countDoubles(str) {
   try {return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length;}
   catch(e) {return 0;} 
}

function factorial(n) {
   if (n === 0 || n === 1) return 1;
   for (let i = n - 1; i >= 1; i--) n *= i;
   return n;
}











// Pairwise
// Implement Bubble Sort
// Implement Selection Sort
// Implement Insertion Sort
// Implement Quick Sort
// Implement Merge Sort

