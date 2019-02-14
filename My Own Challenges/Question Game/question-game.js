// Question Game
// =============

// Based on the "The Complete JavaScript Course" Section 5 of Jonas Schmedtmann at Udemy

// Add EvenListener to Button and ENTER key
document.querySelector(".submit").addEventListener("click", givenAnswer);
document.addEventListener("keypress", function(event) {if (event.keyCode === 13 || event.which === 13) {givenAnswer()}});

//(function() {   // IFFE problem with onClick from HTML
   function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
   }

   Question.prototype.displayQuestion = function() {
      document.getElementById("question").textContent = this.question;
      var x = [];

      for (var i = 0; i < this.answers.length; i++) {
         x.push( i + ": " + this.answers[i] + "<br>");
      }
      x = String(x);
      x = x.replace(/,/g, "");
      document.getElementById("answers").innerHTML = x;
      document.querySelector("#players-answer").value = "";
   }

   Question.prototype.checkAnswer = function(ans, callback) {
      var sc;
      if (ans === this.correct) {
         document.getElementById("correct-answer").textContent = "CORRECT Answer!";
         document.documentElement.style.setProperty("--answer", "green");
         sc = callback(true);
      } else {
         document.getElementById("correct-answer").textContent = "WRONG Answer!";
         document.documentElement.style.setProperty("--answer", "red");
         sc = callback(false);
      }
      this.displayScore(sc);
   }

   Question.prototype.displayScore = function(score) {
      document.getElementById("score-panel").textContent = "Your current score is: " + score;
   }

   // Qestions => need to be convert into JSON
   var q1 = new Question("Is JavaScript the coolest programming language in the world?", ["Yes", "No"], 0);
   var q2 = new Question("What is the capital of Portugal?", ["Porto", "Lisbon", "Braga"], 1);
   var q3 = new Question("Which footbal team is not from Portugal", ["Benfica", "Porto", "Sporting", "FC Standard"], 3);
   var q4 = new Question("What does best describe coding?", ["Boring", "Hard", "Fun", "Tedious"], 2);
      
   // questions = length of JSON
   var questions = [q1, q2, q3, q4];
   var nGlobal;

   function score() {
      var sc = 0;
      return function(correct) {
         if (correct) {
            sc++;
         }
         return sc;
      }
   }

   var keepScore = score();

   function nextQuestion() {
      var nQ = Math.floor(Math.random() * questions.length);
      questions[nQ].displayQuestion();
      nGlobal = nQ;
   }
   
   function givenAnswer() {
      var answer = document.querySelector("#players-answer").value;
      if (answer !== "") {
         if (answer !== "exit" && answer !== "Exit" && answer !== "EXIT") {
            questions[nGlobal].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
         } else {
            document.documentElement.style.setProperty("--answer", "white");
            document.getElementById("correct-answer").textContent = "Game Has Stopped!";
         }
      } else {
         document.documentElement.style.setProperty("--answer", "blue");
         document.getElementById("correct-answer").textContent = "NO ANSWER HAS BEEN GIVEN!";
      }
   }
   
   nextQuestion();
//}) ();