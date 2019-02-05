import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';
// import * as data from "quotes.json";
library.add(faIgloo, faTumblr, faTwitter, faFacebookF);

// Coding Starts here //
// *=*=*=*=*=*=*=*=*= //

class App extends Component {
  render() {
    return (
      <div className="body">
        <header className="quote-header">
          <h1>Random Quote Machine</h1>
        </header>
        <div className="quote-box">
          <div className="quote-text" style={{opacity: 1}}>
            <i className="fa fa-quote-left"></i>
            <span id="text"> Quote comes here </span>
            <i className="fa fa-quote-right"></i>
          </div>
          <div className="quote-author">
            <span id="author">
              - Author's name comes here
            </span>
          </div>
          <div className="quote-buttons">
            <button id="facebook-quote" className="facebook-button" title="Share this quote on Facebook" target="_blank" href="#"><FontAwesomeIcon icon={faFacebookF} /></button>
            <button id="tweet-quote" className="tweet-button" title="Tweet this code" target="_blank" href="#"><FontAwesomeIcon icon={faTwitter} /></button>
            <button id="tumblr-quote" className="tumblr-button" title="Post this quote on Tumblr" target="_blank" href="#"><FontAwesomeIcon icon={faTumblr} /></button>
            <button id="new-quote" className="next-quote-button" onClick="displayQuote()">New Quote</button>
          </div>

        </div>
        <footer>
          <div className="footer">
            Presented by <a target="_blank" href="https://successwizard.eu">Eric R. Kock</a>
          </div>
        </footer>
      </div>
    );
  }
}

function displayQuote() {
  //document.querySelector(#text).textContent = "Display Quote";
}
export default App;
