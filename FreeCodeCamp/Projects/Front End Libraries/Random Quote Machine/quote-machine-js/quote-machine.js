/* Random Quote Machine */
/* A Free Code Camp project challenge
** 
** Rules: read the README.md file */

// Load JSON File //
/*
function loadJSON(callback) {   

   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open('GET', 'quotes.json', true); 
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         }
   };
   xobj.send(null);  
}

init();
function init() {
   loadJSON(function(response) {
    // Parse JSON string into object
      var actual_JSON = JSON.parse(response);
      console.log(actual_JSON);
   });
  }
*/
var currentQuote, newQuote;
var currentAuthor, newAuthor;

document.querySelector('#tweet-quote').addEventListener('click', tweetQuote);
document.querySelector('#tumblr-quote').addEventListener('click', tumblrQuote);
document.querySelector('#new-quote').addEventListener('click', displayQuote);

function tweetQuote() {
   // Tweet active post on Twitter
   document.getElementById('text'). textContent = "This tweet function is coming soon";
}

function tumblrQuote() {
   // Post active quote on Tumblr
   document.getElementById('text'). textContent = "This post function is coming soon";
}

function displayQuote() {
   // Choose a random quote from json file
   //randomQuoteID = JSON.parse(quotes[Math.floor(Math.random() * quotes.length)]); // Still need to connect with JSON file
   //console.log(randomQuoteId);

   // Display Quote & Author
   //document.getElementById('text'). textContent = quotes[randomQuoteId].quote;
   //document.getElementById('author').textContent = quotes[randomQuoteID].author;
   
   // To delete Once connection is made with JSON
   document.getElementById('text'). textContent = "Display New Quote";
   document.getElementById('author').textContent = "-New Author\'s name";
}

