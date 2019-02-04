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

let quoteList = {
   "quotes" : [
      {"quote":"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.", "author":"Dr. Suess"},
      {"quote":"I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.", "author":"Marilyn Monroe"},
      {"quote":"Get busy living or get busy dying.", "author":"Stephen King"},
      {"quote":"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.", "author":"Mark Caine"},
      {"quote":"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.", "author":"Helen Keller"},
      {"quote":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.", "author":"Mark Twain"},
      {"quote":"When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.", "author":"Audre Lorde"},
      {"quote":"Great minds discuss ideas; average minds discuss events; small minds discuss people.", "author":"Eleanor Roosevelt"},
      {"quote":"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", "author":"David Brinkley"},
      {"quote":"Those who dare to fail miserably can achieve greatly.", "author":"John F. Kennedy"},
      {"quote":"I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.", "author":"Herbert Bayard Swope"},
      {"quote":"I'm a success today because I had a friend who believed in me and I didn’t have the heart to let him down.", "author":"Abraham Lincoln"},
      {"quote":"Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.", "author":"Lucille Ball"},
      {"quote":"Let us always meet each other with smile, for the smile is the beginning of love.", "author":"Mother Theresa"},
      {"quote":"Challenges are what make life interesting and overcoming them is what makes life meaningful.", "author":"Joshua J. Marine"}
   ]
};

const randomColor = ["crimson", "blue", "red", "black", "#ff5900", "deepskyblue", "#2f4155", '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


var actualQuote, actualAuthor;
var randomQuoteID, randomColorID;

var actualColorID = -1;
var actualQuoteID = -1;

// Apply First Quote to display
displayQuote();


// Define Button EventListener
document.querySelector('#tweet-quote').addEventListener('click', tweetQuote);
document.querySelector('#tumblr-quote').addEventListener('click', tumblrQuote);
document.querySelector('#new-quote').addEventListener('click', displayQuote);

function tweetQuote() {
   // Tweet active post on Twitter
   var url = "https://twitter.com/intent/tweet";
   var tweet = "Quote: " + actualQuote + " Author: " + actualAuthor;
   var hashtags="freecodecamp, randomquote";
   var via = "username";
   window.open(url+"?text="+tweet+";hashtags="+hashtags+";via="+via,"","width=550,height=400");
}

function tumblrQuote() {
   // Post active quote on Tumblr
   var url = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,randomquote,freecodecamp&caption=";
   var post = "Quote: " + actualQuote + " Author: " + actualAuthor;
   window.open(url+post+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button");
}

function displayQuote() {
   // Choose a random quote from json file
   //randomQuoteID = JSON.parse(quotes[Math.floor(Math.random() * quotes.length)]); // Still need to connect with JSON file
   
   randomQuoteID = Math.floor(Math.random() * quoteList.quotes.length);
   while (randomQuoteID === actualQuoteID) {
      randomQuoteID = Math.floor(Math.random() * quoteList.quotes.length);
   }
      
   // Random color and display new color
   randomColorID = Math.floor(Math.random() * randomColor.length);
   while (randomColorID === actualColorID) {
      randomColorID = Math.floor(Math.random() * randomColor.length);
   }
   document.documentElement.style.setProperty("--general", randomColor[randomColorID]);
   
   // Display Quote & Author
   document.getElementById('text'). textContent = quoteList.quotes[randomQuoteID].quote;
   document.getElementById('author').textContent = "-" + quoteList.quotes[randomQuoteID].author;
   
   actualQuote = quoteList.quotes[randomQuoteID].quote;
   actualAuthor = "-" + quoteList.quotes[randomQuoteID].author;
   actualQuoteID = randomQuoteID;
   actualColorID = randomColorID;
}

