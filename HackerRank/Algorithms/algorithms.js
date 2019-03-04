
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
   var result = alice + " " + bob;
   console.log(result);
   return result;

}

gradingStudents([73,67,38,33]);
function gradingStudents(grades) {
  var finalGrade = 0;
  for (var i = 0; i < grades.length; i++) {
     if (grades[i] >= 38) {
         var gradeMultiple = Math.ceil(grades[i]/5)*5;
         var substraction = gradeMultiple - grades[i];
         if ( substraction < 3) {
            finalGrade = gradeMultiple;
         } else {
            finalGrade = grades[i];
         }
     } else {
        finalGrade = grades[i];
     }
     
     returnGrade(finalGrade);
  }
}

function returnGrade(finalGrade) {
   console.log(finalGrade);
   return finalGrade;
}
