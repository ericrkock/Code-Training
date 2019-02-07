/* Pomodoro Clock */

// A FreeCodeCamp Project Challenge 
// Presented by Eric R. Kock - Feb. 2019

/* Variables Declaration */
var pomodoroSwitch = "session";
var startStop = "pause";
var sessionInterval, breakInterval;


/* HTML Document EventListeners Declaration */
document.querySelector("#break-decrement").addEventListener("click", breakDecrement);
document.querySelector("#break-increment").addEventListener("click", breakIncrement);
document.querySelector("#session-decrement").addEventListener("click", sessionDecrement);
document.querySelector("#session-increment").addEventListener("click", sessionIncrement);
document.querySelector("#start_stop").addEventListener("click", switchStatus);
document.querySelector("#reset").addEventListener("click", reset);

function breakDecrement() {
   document.getElementById("break-length").textContent = Number(+document.getElementById("break-length").textContent+1);
}

function breakIncrement() {
   let x = parseInt(+document.getElementById("break-length").textContent-1);
   if ( x != 0) document.getElementById("break-length").textContent = parseInt(+document.getElementById("break-length").textContent-1);
}

function sessionDecrement() {
   document.getElementById("session-length").textContent = Number(+document.getElementById("session-length").textContent+1);
   document.getElementById("m").textContent = parseInt(+document.getElementById("m").textContent+1);
}

function sessionIncrement() {
   let x = parseInt(+document.getElementById("session-length").textContent-1);
   if ( x != 0) {
      document.getElementById("session-length").textContent = parseInt(+document.getElementById("session-length").textContent-1);
      document.getElementById("m").textContent = parseInt(+document.getElementById("m").textContent-1);
   }
}

function switchStatus() {

   if ( startStop == "start") {
      startStop = "pause";
   } else {
      startStop = "start";
   }
   countDown();
}

function countDown() {
   
   if (startStop == "start") {
      if (pomodoroSwitch == "session") {

         pomodoroSwitch ="pause";
         document.documentElement.style.setProperty("--switch", "green");
      } else {

         pomodoroSwitch ="session";
         document.documentElement.style.setProperty("--switch", "navy");
      }
      console.log("Count Down is running");
   } else {

      console.log("Count Down has Stopped!")
   }
   console.log(startStop);
}

function reset() {
   document.getElementById("break-length").textContent = "5";
   document.getElementById("session-length").textContent = "25";
   document.getElementById("m").textContent = "25";
   document.documentElement.style.setProperty("--switch", "navy");
   pomodoroSwitch = "session";
   startStop = "pause";
}