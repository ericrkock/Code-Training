/* CODING INTERVIEW PREP */
/*     FREECODECAMP      */
/* ===================== */

/* ALGORITHMS */
/* ========== */

// Find the Symmetric Difference
//sym([1, 2, 3], [5, 2, 1, 4]);
//sym([1, 2, 3, 3], [5, 2, 1, 4]);
//sym([1, 2, 3, 3], [5, 2, 1, 4, 5]);
sym([[1, 2, 5, 6], [2, 3, 5], [3, 4, 5]])
function sym(args) {
   //console.log(args.length);
   var newArgs = [];
   var compArgs = [];
   for (let i = 0; i < args.length; i++) {
      compArgs = args[i];
      console.log("compArgs: ",compArgs)
      for (let j = 0; j < args[i].length; j++) {
         if (!compArgs.includes(args[i][j]) && !newArgs.includes(args[i][j])) {
            newArgs.push(args[i][j]);
         }
      }
   }
   newArgs.sort();
   console.log(newArgs);
   //return args;
   
 }
 
 // Inventory Update
// No Repeats Please
// Pairwise
// Implement Bubble Sort
// Implement Selection Sort
// Implement Insertion Sort
// Implement Quick Sort
// Implement Merge Sort

