import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)

import './App.css';

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
            <span id="quote-text">
              Quote comes here
            </span>
          </div>
          <div className="quote-author">
            <span id="author">
              - Author's name comes here
            </span>
          </div>
          <div className="quote-buttons">
            <a id="tweet-quote" className="tweet-button" title="Tweet this code" target="_blank" href="#"><i className="fa fa-twitter"></i></a>
            <a id="tumblr-quote" className="tumblr-button" title="Post this quote on Tumblr" target="_blank" href="#"><i className="fa fa-tumblr"></i></a>
            <button id="new-quote" className="new-quote-button">New Quote</button>
          </div>

        </div>
        <footer>
                    <div className="quote-box-footer">
            Presented by <a href="#" target="_blank">Eric R. Kock</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
