/*
reverseString("15487");
function reverseString(s) {
   try { s = s.split("").reverse().join(""); }
   catch(e) { console.log(e.message); }
   finally { console.log(s); }
 }
 */

/*
isPositive(-2);
function isPositive(a) {
   let message;
   if (a < 0) {
      message = "Negative Error"
      throw new Error(message);
   } else if (a == 0) {
      throw "Zero Error";
   } else {
      return "YES";
   }

}
*/

/*
Rectangle(5, 6);
function Rectangle(a, b) {
   console.log({
      length: a,
      width: b,
      perimeter: (a + b) * 2,
      area: a * b
    });
   return {
      length: a,
      width: b,
      perimeter: (a + b) * 2,
      area: a * b
    }
}
*/

/*
getCount();
function getCount(objects) {
   let count = 0;
    for (let i = 0; i <= objects.length; i++) {
         if (objects[i].x == objects[i].y) {
            count++;
         }
    }
    return count
}
*/

/*
class Polygon {
   constructor(sides) {
       this.pol_perimeter = sides.reduce((x, y) => x + y);
   }
   perimeter() {
       return this.pol_perimeter;
   }
}
*/

/*
Rectangle.prototype.area = function () {
   return this.w * this.h;
}

class Square extends Rectangle {
   constructor(sideLength) {
       super(sideLength, sideLength);
   }
}
*/

/*
function sides(literals, ...expressions) {
   let A = expressions[0];
   let P = expressions[1];
   var answers = [];
   var s1 = (P+Math.sqrt(Math.pow(P, 2)-16*A))/4;
   var s2 = (P-Math.sqrt(Math.pow(P, 2)-16*A))/4;
   
   answers.push(s1);
   answers.push(s2);
   
   return answers.sort();
}
*/

/*
let nums = [1, 2, 3, 4, 5];
modifyArray(nums);
function modifyArray(nums) {
    
   // Normal way
   //for (var i = 0; i < nums.length; i++) {
   //   console.log(i, ": ",nums[i]%2)
   //   if( nums[i]%2 == 0) {
   //      nums[i] = nums[i] * 2;
   //   } else {
   //      nums[i] = nums[i] * 3;
   //   }
   //}
   //console.log(nums);
   
   // The Arrow way
   return nums.map(i => i = (i % 2 == 0) ? i * 2 : i * 3);
}
*/

/*
getMaxLessThanK(8,5);
function getMaxLessThanK(n, k) {
   
   //var max = 0;
   //var summ;
   //for (var b = 1; b <= n; b++) {
   //    for (var a = 1; a < b; a++) {
   //        summ = a & b;
   //        if ( summ < k ) {
   //            if ( summ > max) max = summ;
   //        }
   //    }
   //}
   //console.log(max);
   //return max;
   
   
   console.log(((k | (k - 1)) > n) ? (k - 2) : (k - 1));
   return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
   
}
*/

/*
getDayName("10/11/2009");
function getDayName(dateString) {
   let dayName;
   
   // Write your code here
   
   dayName = new Date(dateString).toLocaleString('en-us', { weekday: 'long' });
   
   //let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   //dayName = dayNames[new Date(dateString).getDay()];

   console.log(dayName);
   return dayName;
}
*/

/*
regexVar("abcda");
function regexVar() {
   //
   // Declare a RegExp object variable named 're'
   // It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   //
   let re = /^([aeiou]).*\1$/;
   console.log(re);
   //
   // Do not remove the return statement
   //
   return re;
}
*/


/*
function regexVar() {
   //
   // Declare a RegExp object variable named 're'
   // It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
   // followed by one or more letters.
   //
   const re = /^(Mr?s|[MDE]r)\.[A-Za-z]+$/;
   
   //
   // Do not remove the return statement
   //
   return re;
}
*/

/*
function regexVar() {
   // *
   // * Declare a RegExp object variable named 're'
   // * It must match ALL occurrences of numbers in a string.
   // *
   let re = /\d+/g;
   
   // *
   // * Do not remove the return statement
   // *
   return re;
}
*/


// JS File - button.js
      var btn = document.createElement("Button");

      btn.innerHTML = "0";
      btn.id = "btn";
      document.body.appendChild(btn);

      btn.onclick = function() {
         btn.innerHTML++;
      }

// index File - index.html
   /*
      <!-- Enter your HTML code here -->
      <!DOCTYPE html>
      <html>
         <head>
            <meta charset="utf-8">
            <link rel="stylesheet" href="css/button.css" type="text/css">
            <title>Button</title>
         </head>
         <body>
            <script src="js/button.js" type="text/javascript"></script
         </body>
      </html>
   */
   
// CSS file - button.css
   /*
      #btn {
         width: 96px;
         height: 48px;
         font-size: 24px;
      }
   */