//  HackerRank Challenges 
// Interview Preparation Kit 
// ========================= 

// WARM-UP CHALLENGES

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