//  HackerRank Challenges 
// Interview Preparation Kit 
// ========================= 

/* WARM-UP CHALLENGES */
/* ================== */

// Sock Merchant
//sockMerchant(9, [10,20,20,10,10,10,20,10,20,10]);
function sockMerchant(n, ar) {
   let d = {};
   let pairs = 0;
   ar.forEach(e=>{pairs+=(d[e]=Math.pow((d[e]||0)-1, 2)) ? 0 : 1; });
   console.log(pairs);
   return pairs;
}

// Counting Valleys
//countingValleys(8, ["U","D","D","D","U","D","U","U"]);
//countingValleys(12, ["D","D","U","U","D","D","U","D","U","U","U","D"]);
//countingValleys(100, ["D","U","D","U","U","U","U","U","U","U","U","D","U","D","D","U","U","D","U","U","D","D","D","U","U","D","D","D","D","D","U","U","D","U","U","U","U","D","D","D","U","U","U","U","U","U","U","D","D","U","D","U","D","U","U","U","D","D","D","D","U","U","D","D","D","U","D","D","D","D","U","U","D","D","U","D","D","U","U","U","D","U","U","U","D","U","U","D","U","D","U","D","D","D","D","D","D","D","D","D"]);
function countingValleys(n, s) {
   let level = 0;
   let valey = 0;
   for (let i = 0; i < n; i++) {
      if( s[i] == "U") level++;
      if ( s[i] == "D") level--;
      if ( s[i] == "U" && level === 0) valey++;
      console.log("I:", i," ", s[i], "Level : ", level, " valey: ", valey);
   }
   console.log("Final Level: ",level, " valey : ", valey);
   return level;
}

// Jumping on the Clouds
//jumpingOnClouds([0,0,0,0,1,0]);
//jumpingOnClouds([0,0,1,0,0,1,0]);
function jumpingOnClouds(c) {
   let jumps = 0;
   let i = 0;
   while (i < (c.length-1)) {
      if (c[i+1] === c[i] && c[i+2] === c[i]) {
         jumps++;
         i = i + 2;
      } else if (c[i+1] === c[i] && c[i+2] != c[i]) {
         jumps++;
         i++;
      } else if (c[i+1] =! c[i]) {
         jumps++;
         i = i + 2;
      } 
   }
   console.log(jumps);
   return jumps;
}

// Repeated String
//repeatedString("aba",10);
//repeatedString("a",1000000000000);
//repeatedString("ceebbcb",817723);
function repeatedString(s, n) {
   const counta = (str) => str.split('')
   .filter(c => c == 'a')
   .length
 
   const d = Math.floor(n / s.length)
   const r = n - (s.length * d)
   console.log(d * counta(s) + counta(s.substr(0, r)));
   return d * counta(s) + counta(s.substr(0, r))
}

/* ARRAYS CHALLENGES */
/* ================= */

// 2D Array-DS - Easy
//hourglassSum([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]);
//hourglassSum([[-1,1,-1,0,0,0],[0,-1,0,0,0,0],[-1,-1,-1,0,0,0],[0,-9,2,-4,-4,0],[-7,0,0,-2,0,0],[0,0,-1,-2,-4,0]]);
//hourglassSum([[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0,]]);
function hourglassSum(arr) {
   maxSum = [];
   sumHourGlass = 0;
   for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
         sumHourGlass = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
         maxSum.push(sumHourGlass);
      }
   }
   console.log(Math.max(...maxSum));
   return Math.max(...maxSum);
}

// Arrays: Left Rotation - Easy
//rotLeft([1,2,3,4,5], 4);
//rotLeft([41,73,89,7,10,1,59,58,84,77,77,97,58,1,86,58,26,10,86,51], 10);
//rotLeft([33,47,70,37,8,53,13,93,71,72,51,100,60,87,97], 13);
function rotLeft(a, d) {
   var temp = "";
   for (let j = 1; j <= d; j++) {
      temp = a[0];
      a.shift();
      a.push(temp);
   }
   console.log(a);
   return a;
}

// New Year Chaos - Medium
//minimumBribes([2,1,5,3,4]);
//minimumBribes([2,1,5,3,4]);
minimumBribes([5,1,2,3,7,8,6,4]);
//minimumBribes([1,2,5,3,7,8,6,4]);
//minimumBribes([1,2,5,3,4,7,8,6]);
function minimumBribes(q) {
   let swaps = 0;
   let min = q.length;
   for (var i = q.length - 1; i >= 0; i--){
       if (q[i] - i > 3){
          console.log("Too chaotic");
           return "Too chaotic";
       }
       if (q[i] > i+1){
           swaps += (q[i]-(i+1));
       } else {
           if (min > q[i]){
               min = q[i];
           } else if (q[i] != min){
               swaps++;
           }
       }
   }
   console.log(swaps);
   return swaps;

}

// Minimum Swaps 2 - Medium
// Array Manupilation - Hard