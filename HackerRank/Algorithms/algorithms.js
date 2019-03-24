//    HackerRank Challenges 
// Problem Solving - Algorithms 
// ============================ 

/* == DATA STRUCTURES == Warmup == */
/* =============================== */

// Solve Me First - Easy
//solveMeFirst(2,3);
function solveMeFirst(a, b) {
   // Hint: Type return a+b below  
     return a + b;
 }

// Simple Array Sum - Easy
//simpleArraySum([1, 2, 3, 4, 10, 11]);
function simpleArraySum(ar) {
   /*
    * Write your code here.
    */
   var sum = 0;
   for( var i = 0; i < ar.length; i++ ) {
      sum = sum + ar[i];
   }
   return sum;
}

// Compare the Triplets
//compareTriplets([17,28,30], [99,16,8]);
function compareTriplets(a, b) {
   var alice = 0;
   var bob = 0;

   for (var i = 0; i < a.length; i++) {
      if ( a[i] > b[i]) {
         alice++;
      } else if (a[i] < b[i]) {
         bob++;
      }
   }
   console.log([alice, bob]);
   return [alice, bob];
}

// A Very Big Sum - Easy
//aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
function aVeryBigSum(ar) {
   var sum = 0;
   for (var i = 0; i < ar.length; i++) {
       sum = sum + ar[i];
   }
   return sum;
}

// Diagonal Difference - Easy
//diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);
function diagonalDifference(arr) {
   let sumDiag1 = 0;
   let sumDiag2 = 0;
   let arrLength = arr.length - 1;
   for (let i = 0; i < arr.length; i++) {
      sumDiag1 = sumDiag1 + arr[i][i];
      sumDiag2 = sumDiag2 + arr[i][arrLength];
      arrLength--;
   }
   //console.log(Math.abs(sumDiag1 - sumDiag2));
   return Math.abs(sumDiag1-sumDiag2);
}

// Plus Minus - Easy
//plusMinus([-4, 3, -9, 0, 4, 1]);
function plusMinus(arr) {
   var negative = 0;
   var positive = 0;
   var zero = 0;
   for (var i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {
           positive++;
       } else if (arr[i] < 0) {
           negative++;
       } else {
           zero++;
       }
   }
   console.log(positive / arr.length);
   console.log(negative / arr.length);
   console.log(zero / arr.length);
}

// Staircase - Easy
//staircase(8);
function staircase(n) {
   let cardinal ="#";
   let space = " ";
   for (let i = 1; i <= n; i++) {
      let line = space.repeat(n-i) + cardinal.repeat(i);
      console.log(line);
   }
}

// Mini-Max Sum - Easy
//miniMaxSum([5,5,5,5,5]);
function miniMaxSum(arr) {
   var minimum = Math.min.apply(null, arr);
   var maximum = Math.max.apply(null, arr);
   var sumMin = 0;
   var sumMax = 0;
   console.log(minimum, maximum);
   if(minimum != maximum) {
      for (var i = 0; i < arr.length; i++) {
         if (arr[i] != minimum) {
            sumMax = sumMax + arr[i];
         }
         if (arr[i] != maximum) {
            sumMin = sumMin + arr[i];
         }
      }
   } else {
      for (var i = 1; i < arr.length; i++) {
         sumMax = sumMax + arr[i];
         sumMin = sumMin + arr[i];
      }
   }
   console.log(sumMin, sumMax);
}

// Birthday Cake Candles - Easy
//birthdayCakeCandles([3,2,1,3]);
function birthdayCakeCandles(ar) {
   var max = Math.max.apply(null, ar);
   var num = 0;
   for (var i = 0; i < ar.length; i++) {
      if(ar[i] == max) {
         num++;
      }
   }
   console.log(num);
   return num;
}

// Time Conversion - Easy
//timeConversion("07:05:45PM");
function timeConversion(s) {
   console.log(s);
    var time = s.match(/(\d+):(\d+):(\d+)(\w)/);
    var hours = Number(time[1]);
    var minutes = Number(time[2]);
    var seconds = Number(time[3]);
    var meridian = time[4].toLowerCase();

    if (meridian == 'p' && hours < 12) {
      hours += 12;
    }
    else if (meridian == 'a' && hours == 12) {
      hours -= 12;
    }
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    var newTime = hours + ":" + minutes + ":" + seconds;
    console.log(hours + ":" + minutes + ":" + seconds);
    return newTime
}

/* == DATA STRUCTURES == Implementation */ 
/* ==================================== */

// Grading Students
//gradingStudents([73,67,38,33]);
function gradingStudents(grades) {
  var finalGrade = [];
  for (var i = 0; i < grades.length; i++) {
     if (grades[i] >= 38) {
         var gradeMultiple = Math.ceil(grades[i]/5)*5;
         var substraction = gradeMultiple - grades[i];
         if ( substraction < 3) {
            finalGrade.push(gradeMultiple);
         } else {
            finalGrade.push(grades[i]);
         }
     } else {
        finalGrade.push(grades[i]);
     }
  }
   console.log(finalGrade);
   return finalGrade;
}

// Apple and Orange - Easy
//countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);
function countApplesAndOranges(s, t, a, b, apples, oranges) {
   var countApples = 0;
   var countOranges = 0;

   for (let apple = 0; apple < apples.length; apple++) {
      let distanceApple = parseInt(a) + parseInt(apples[apple]);
      if (distanceApple >= parseInt(s) && distanceApple <= parseInt(t)) {
         countApples++;
      }
      console.log("Distance: ",distanceApple, " ", apples[apple]);
   }
   for (let orange = 0; orange < oranges.length; orange++) {
      let distanceOrange = parseInt(b) + parseInt(oranges[orange]);
      if (distanceOrange >= parseInt(s) && distanceOrange <= parseInt(t)) {
         countOranges++;
      }
      console.log("Distance: ",distanceOrange, " ", oranges[orange]);
   }
   console.log(countApples);
   console.log(countOranges);
}

// Kangaroo - Easy
//kangaroo(0,3,4,2);
//kangaroo(0,2,5,3);
//kangaroo(2564,5393,5121,2836);
function kangaroo(x1, v1, x2, v2) {
   if (v1 == v2 && x1 != x2) console.log("NO"); //return "NO";
   if (x1 < x2 && v1 < v2) console.log("NO"); //return "NO";
   if (x1 > x2 && v1 > v2) console.log("NO"); //return "NO";
   if (x1 < x2 && v1 > v2) {
      while (x1 != x2) {
         x1 = x1 + v1;
         x2 = x2 + v2;
         if (x1 == x2) console.log("YES"); //return "YES";
         if (x1 > x2) console.log("NO"); //return "NO";
      }
   }
   if (x1 > x2 && v1 < v2) {
      while (x1 != x2) {
         x1 = x1 + v1;
         x2 = x2 + v2;
         if (x1 == x2) console.log("YES"); //return "YES";
         if (x1 < x2) console.log("NO"); //return "NO";
      }
   }

}

// Between Two Sets - Easy
//getTotalX([2,4],[16,32,96]);
//getTotalX([3,4],[24,48]);
function getTotalX(a, b) {
   let setCount = 0;
   for (let i = Math.min(...a); i <= Math.max(...b); i++) {
       if (a.every(int => (i % int == 0))) {
           if (b.every(int => (int % i == 0))) {
               setCount++;
           }
       }
   }
   console.log(setCount);
   return setCount;
}

// Breaking the Records - Easy
//breakingRecords([12,24,10,24]);
//breakingRecords([10,5,20,20,4,5,2,25,1]);
function breakingRecords(scores) {
   var result = [];
   var countMin = 0;
   var countMax = 0;
   var min = scores[0];
   var max = scores[0];
   for (let i = 0; i < scores.length; i++) {
      if (scores[i] < min) {
         min = scores[i]; 
         countMin++;
      }
      if (scores[i] > max) {
         max = scores[i]; 
         countMax++;
      }
   }
   result.push(countMax);
   result.push(countMin);
   console.log(result);
   return result;
}

// Birthday Chocolate - Easy
//birthday([1,2,1,3,2], 3, 2);
//birthday([1,1,1,1,1,1], 3, 2);
//birthday([4], 4, 1);
function birthday(s, d, m) {
   let counter = 0;
   const reducer = (a, b) => a + b;
   for(let i=0; i<s.length-m+1; i++) {
         if (s.slice(i,i+m).reduce(reducer) == d) counter++;
   }
   console.log(counter);
   return counter;
}

// Divisble Sum Pairs - Easy
//divisibleSumPairs(6,3,[1,3,2,6,1,2]);
function divisibleSumPairs(n, k, ar) {
   var countPairs = 0;
   for (let i = 0; i < n; i++) {
      for (let l = i+1; l < n; l++) {
         let sum = ar[i] + ar[l];
         if (sum == k) countPairs ++;
         if (sum !== k & sum%k == 0) countPairs++;
      }
   }
   console.log(countPairs);
   return countPairs;
}

// Migratory Birds - Easy
//migratoryBirds([1,4,4,4,5,3]);
//migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]);
function migratoryBirds(arr) {
   var newArr = arr.sort();
   var birds = 0;
   var max = 0;
   var bird = "";
   for (let i = 0; i < arr.length; i++){
      if (newArr[i] == newArr[i+1]) {
         birds ++;
      } else if (birds > max) {
         max = birds;
         birds = 0;
         bird = newArr[i];
      }
   }
   console.log(bird);
   return birds;
}

// Day of the Programmer - Easy
//dayOfProgrammer(2017);
//dayOfProgrammer(2016);
//dayOfProgrammer(1800);
function dayOfProgrammer(year) {
   if (year == 1918) {
      console.log("26.09.1918"); 
      return "26.09.1918";
   }
   if((year <= 1917 && (year%4 == 0)) || ((year > 1918) && (year%400 == 0 || ((year%4 == 0) && (year%100 != 0))))) {
      console.log("12.09." + year);
      return "12.09." + year;
   } else {
      console.log("13.09." + year);
      return "13.09." + year;
   }
}

// Bom Appétit - Easy
//bonAppetit([3,10,2,9],1,12);
//bonAppetit([3,10,2,9],1,7);
function bonAppetit(bill, k, b) {
   var amount= 0;
   var checkAmount = 0;
   for (let i = 0; i < bill.length; i++) {
      if (i != k) {
         amount = amount + bill[i];
      }
   }
   checkAmount = amount / 2;
   if (checkAmount != b) {
      console.log(b - checkAmount);
   } else {
      console.log("Bon Apetit");
   }
}

// Drawing Book - Easy
//pageCount(6,2);
//pageCount(5,4);
//pageCount(6,3);
function pageCount(n, p) {
   var turnedPages = 0;
   var activePage = 0;
   if( n / 2 >= p && n != p) {
      activePage = 1;
      while (activePage < p) {
         turnedPages++;
         activePage = activePage + 2;
      }
   } else if (n / 2 <= p && n%2 == 0 && n != p) {
      activePage = n;
      while (activePage > p) {
         turnedPages++;
         activePage = activePage - 2;
      }
   } else if (n / 2 <= p && n%2 == 1 && n != p) {
      activePage = n-1;
      while (activePage > p) {
         turnedPages++;
         activePage = activePage - 2;
      }
   } 
   console.log(turnedPages);
}

// Electronics Shop - Easy
//getMoneySpent([3,1],[5,2,8],10);
//getMoneySpent([5],[4],5);
function getMoneySpent(keyboards, drives, b) {
   let max = -1;
   if (keyboards.length > 0 && drives.length > 0) {
      for (let i = 0; i < keyboards.length; i++) {
         for (let j = 0; j < drives.length; j++) {
            if ((keyboards[i] + drives[j]) <= b && keyboards[i] + drives[j] > max) {
               max = keyboards[i] + drives[j];
            }
         }
      }
   } 
   console.log(max);
   return max;
}

// Cats and a Mouse - Easy
//catAndMouse(1,2,3);
//catAndMouse(1,3,2);
function catAndMouse(x, y, z) {
   var distanceA = x - z;
   var distanceB = y - z;
   if (distanceA < 0) distanceA *= -1;
   if (distanceB < 0) distanceB *= -1;
   if (distanceA < distanceB ) return "Cat A"; // console.log("Cat A"); 
   if (distanceA > distanceB ) return "Cat B"; // console.log("Cat B");
   if (distanceA == distanceB ) return "Mouse C"; //console.log("Mouse C");
}

// Forming a Magic Square - Medium
//formingMagicSquare([[5,3,4], [1,5,8], [6,4,2]]);
function formingMagicSquare(s) {
   let n = [];
   s.map(x => {x.map(y => n.push(y))});

   console.log(n);

   // Taking all cobination in an Array for 3*3
   let allCombinations = [[8, 1, 6, 3, 5, 7, 4, 9, 2],
                     [6, 1, 8, 7, 5, 3, 2, 9, 4],
                     [4, 3, 8, 9, 5, 1, 2, 7, 6],
                     [2, 7, 6, 9, 5, 1, 4, 3, 8],
                     [2, 9, 4, 7, 5, 3, 6, 1, 8],
                     [4, 9, 2, 3, 5, 7, 8, 1, 6],
                     [6, 7, 2, 1, 5, 9, 8, 3, 4],
                     [8, 3, 4, 1, 5, 9, 6, 7, 2]]

   let arrMaxDiff = [];

   // Get each array  value difference with passed array value diff 
   // for each item

   // Looping first array of array
   allCombinations.map(eacharr => {

       // Looping each nested array
       allCombinations.map(eacharr => {

           // Taking the total difference to turn into Magic Array 
           // and pushing into array
           let maxdiffer = 0;

           // For each max diff keeping stored
           arrMaxDiff.push(eacharr.reduce((c, cv, ci, node) => {
               {
                   c += Math.abs(cv - n[ci]);
               }
               return c;
           }, 0));

       });
   });

   // Taking minimum value
   console.log(Math.min(...arrMaxDiff));
   return Math.min(...arrMaxDiff);
}

// Picking Numbers - Easy
//pickingNumbers([4,6,5,3,3,1]);
//pickingNumbers([1,2,2,3,1,2]);
function pickingNumbers(a) {
   // Write your code here
  let max = 0;
  [...new Set(a)].forEach(x => {
      max = Math.max(max, a.reduce((c, v) => c += (v === x || v === x + 1), 0));
  })
  console.log(max);
  return max;
}

// Climbing the LEaderboard - Medium
// The Hurdle Race - Easy

// Designer PDF Viewer - Easy
//designerPdfViewer([1,3,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], "abc");
//designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7], "zaba");
function designerPdfViewer(h, word) {
   let iArr = [];
   for (let i = 0; i < word.length; i++) {
      iArr.push(h[word.charCodeAt(i) - 97]);
   }
   console.log(Math.max(...iArr) * word.length);
   return Math.max(...iArr) * word.length;
}

// Utopian Tree - Easy
// Angry Professor - Easy
// Beautiful Days at the Movies - Easy
// Viral Advertising - Easy
// SAve the Prisoner! - Easy
// Circular Array Rotation - Easy
// Sequence Equation - Easy
// Jumping on the Clouds: REvisited - Easy
// Find Digits - Easy
// Extra Long Factorials - Medium
// Append and Delete - Easy
// Sherlock and Squares - Easy
// Library Fine - Easy
// Cut the sticks - Easy
// Non-divisible Subset - Medium
// Equalize the Array - Easy
// Queen's Attack II - Medium
// ACM ICPC Team - Easy
// Taum and B'day - Easy
// Organizing Containers of Balls - Medium
// Encryption - Medium
// Bigger is Greater - Medium
// Modified Kaprekar Numbers - Easy
// Beautiful Triplets - Easy
// Minimum Distances - Easy
// Halloween Sale - Easy
// The Time in Words - Medium
// Chocolate Feast - Easy
// Service Lane - Easy
// Flatland Space Station - Easy
// Fair Rotation - Easy
// Cavity Map - Easy
// Manasa and Stones - Easy
// The Grid Search - Medium
// Happy Ladybugs - Easy
// Strange Counter - Easy
// 3D Surface Area - Medium
// Absolute Permutation - Medium
// The Bomberman Game - Medium
// Emma's Supercomputer - Medium
// Larry's Array - Medium
// Almost Sorted - Medium
// Matrix Layer Rotation - Hard



/* STRINGS */
/* ======= */

/* SORTING */
/* ======= */

/* DYNAMIC PROGRAMMING */
/* =================== */

// The Coin Change Problem - Medium
// Equal - Medium
// Sherlock and Cost - Medium
// Construct the Array - Medium
// Kingdom Division

// Beta Tester for HackerRank - NOT SOLVED YET!!!
// Bricks Game - Medium
//bricksGame([1,2,3,4,5]);
function bricksGame(arr) {
   /*
    * Write your code here.
    */
   let bricksLength = arr.length;
   let player = 1;
   let score1 = 0;
   let score2 = 0;
   let tempScore1 = 0;
   let tempScore2 = 0;


   for (let i = 0; i < (arr.length)/3; i++) {
      for (let x = 1; x <= 3; x++) {
      }
   }
}

