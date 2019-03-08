//    HackerRank Challenges 
// Problem Solving - Algorithms 
// ============================ 

// == DATA STRUCTURES == Warmup == 
// =============================== 

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

// == DATA STRUCTURES == Implementation == 
// =======================================

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
   if (v1 == v2 && x1 != x2) console.log("1. NO"); //return "NO";
   if (x1 < x2 && v1 < v2) console.log("2. NO"); //return "NO";
   if (x1 > x2 && v1 > v2) console.log("3. NO"); //return "NO";
   if (x1 < x2 && v1 > v2) {
      while (x1 != x2) {
         x1 = x1 + v1;
         x2 = x2 + v2;
         if (x1 == x2) console.log("4. YES"); //return "YES";
         if (x1 > x2) console.log("5. NO"); //return "NO";
      }
   }
   if (x1 > x2 && v1 < v2) {
      while (x1 != x2) {
         x1 = x1 + v1;
         x2 = x2 + v2;
         if (x1 == x2) console.log("6. YES"); //return "YES";
         if (x1 < x2) console.log("7. NO"); //return "NO";
      }
   }

}


// Between Two Sets - Easy
//

// Breaking the Records - Easy
//

// Birthday Chocolate - Easy
//


// DYNAMIC PROGRAMMING //
// =================== //

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