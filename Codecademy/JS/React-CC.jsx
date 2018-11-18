// Components and Advanced JSX
// ===========================

// Use Multiline JSX in a Component
// -----------------------------------
// QuotMaker.js
// ------------
    import React from 'react';
    import ReactDOM from 'react-dom';

    class QuoteMaker extends React.Component {
        render() {
            return (
                <blockquote>
                    <p>
                    The world is full of objects, more or less interesting; I do not wish to add any more.
                    </p>
                    <cite>
                        <a target="_blank"
                            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
                            Douglas Huebler
                        </a>
                    </cite>
                </blockquote>
            );
        }
    };

    ReactDOM.render(
    <QuoteMaker />,
    document.getElementById('app')
    );

// app.js
// -----
    import React from 'react';
    import ReactDOM from 'react-dom';

    class QuoteMaker extends React.Component {
        render() {
            return (
            <blockquote>
                <p>What is important now is to recover our senses.</p>
                <cite>
                    <a target="_blank" 
                        href="https://en.wikipedia.org/wiki/Susan_Sontag">
                        Susan Sontag
                    </a>
                </cite>
            </blockquote>
            );
        }
    };

    ReactDOM.render(
        <app />,
        document.getElementById('app')
    );

// Use a Variable Attribute in a Component
// ------------------------------------------
// RedPanda.js
// -----------
    import React from 'react';
    import ReactDOM from 'react-dom';

    const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width:  '200px'
    };

    class RedPanda extends React.Component {
        render() {
            return (
                <div>
                    <h1>Cute Red Panda</h1>
                    <img 
                    src={redPanda.src}
                    alt={redPanda.alt}
                    width={redPanda.width} />
                </div>
            );
        }
    }

    ReactDOM.render(
        <RedPanda />,
        document.getElementById('app')
    );

// app.js
// ------
    import React from 'react';
    import ReactDOM from 'react-dom';

    const owl = {
        title: 'Excellent Owl',
        src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
    };

    // Component class starts here:
    class Owl extends React.Component {
        render() {
            return (
                <div>
                    <h1>{owl.title}</h1>
                    <img src={owl.src} alt={owl.title} />
                </div>
            );
        }
    }

    ReactDOM.render(
        <Owl />,
        document.getElementById('app')
    );

// Put Logic in a Render Function
// ---------------------------------
// app.js
// ------
    import React from 'react';
    import ReactDOM from 'react-dom';

    const friends = [
        {
            title: "Yummmmmmm",
            src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
        },
        {
            title: "Hey Guys!  Wait Up!",
            src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
        },
        {
            title: "Yikes",
            src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
        }
    ];

    // New component class starts here:
    class Friend extends React.Component {
        render() {
            let friend = friends[1];
            return (
                <div>
                <h1>{friend.title}</h1>
                <img src={friend.src} />
                </div>
            );
        }
    }

ReactDOM.render(<Friend />, document.getElementById('app'));

// Use a Conditional in a Render Function
// -----------------------------------------
// TodaysPlan.js
// -------------
    import React from 'react';
    import ReactDOM from 'react-dom';

    class TodaysPlan extends React.Component {
        render() {
            let task;
            if (!apocalypse) {
                task = 'learn React.js'
            } else {
                task = 'run around'
            }
            return <h1>Today I am going to {task}!</h1>;
        }
    }

    ReactDOM.render(
        <TodaysPlan />,
        document.getElementById('app')
    );

// app.js
// ------
    import React from 'react';
    import ReactDOM from 'react-dom';

    const fiftyFifty = Math.random() < 0.5;

    // New component class starts here:
    class TonightsPlan extends React.Component {
        render() {
            if (fiftyFifty) {
                return <h1>Tonight I'm going out WOOO</h1>;
            } else {
                return <h1>Tonight I'm going to bed WOOO</h1>;
            }
        }
    }

    ReactDOM.render(
        <TonightsPlan />,
        document.getElementById('app')
    );

// Use this in a Component
// --------------------------
// app.js
// ------
    import React from 'react';
    import ReactDOM from 'react-dom';

    class MyName extends React.Component {
        // name property goes here:
        get name() {
            return 'Eric';
        }

        render() {
            return <h1>My name is {this.name}.</h1>;
        }
    }

    ReactDOM.render(<MyName />, document.getElementById('app'));

// Use an Event Listener in a Component
// ---------------------------------------
// app.js
// ------
    import React from 'react';
    import ReactDOM from 'react-dom';

    class Button extends React.Component {
        scream() {
            alert('AAAAAAAAHHH!!!!!');
        }

        render() {
            return <button onClick={this.scream}>AAAAAH!</button>;
        }
    }
    ReactDOM.render(<Button />, document.getElementById('app'));

//Components Render Other Components
// =================================

// Apply a Component in a Render Function
// --------------------------------------
// ProfilePage.js
// --------------
    import React from 'react';
    import ReactDOM from 'react-dom';

    class ProfilePage extends React.Component {
        render() {
            return (
                <div>
                            <NavBar />
                    <h1>All About Me!</h1>
                    <p>I like movies and blah blah blah blah blah</p>
                    <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
                </div>
            );
        }
    }

// NavBar.js
// ---------
    import React from 'react';

    class NavBar extends React.Component {
        render() {
            const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
            const navLinks = pages.map(page => {
                return (
                    <a href={'/' + page}>
                    {page}
                    </a>
                )
            });
            return <nav>{navLinks}</nav>;
        }
    }

// Require A File
// --------------
// ProfilePage.js
// --------------


// NavBar.js
// ---------


// 
// ---