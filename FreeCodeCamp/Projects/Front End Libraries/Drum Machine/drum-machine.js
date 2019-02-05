/* Drum Machine */

// Still To DO
// 1. Sound per key
// 2. Set volume
// 3. Use keyboard keys
// 4. On key press, activate respective hover CSS
// 5. Buzz when Power is OFF

var actualEvent;
var powerToggle = true;
var musicStyle = 1;
var actualVolume = 0.5;

document.querySelector('#Q').addEventListener('click', qEvent);
document.querySelector('#W').addEventListener('click', wEvent);
document.querySelector('#E').addEventListener('click', eEvent);
document.querySelector('#A').addEventListener('click', aEvent);
document.querySelector('#S').addEventListener('click', sEvent);
document.querySelector('#D').addEventListener('click', dEvent);
document.querySelector('#Z').addEventListener('click', zEvent);
document.querySelector('#X').addEventListener('click', xEvent);
document.querySelector('#C').addEventListener('click', cEvent);
document.querySelector('#powertoggle').addEventListener('click', togglePower);
document.querySelector('#mp3-style').addEventListener('click', styleMusic);
document.querySelector('#key-volume').addEventListener('click', adjustVolume);

function qEvent() {
    if(powerToggle === true) {
        actualEvent = "Q KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}

function wEvent() {
    if(powerToggle === true) {
        actualEvent = "W KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}
function eEvent() {
    if(powerToggle === true) {
        actualEvent = "E KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}
function aEvent() {
    if(powerToggle === true) {
        actualEvent = "A KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}
function sEvent() {
    if(powerToggle === true) {
        actualEvent = "S KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}
function dEvent() {
    if(powerToggle === true) {
        actualEvent = "D KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}
function zEvent() {
    if(powerToggle === true) {
        actualEvent = "Z KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}
function xEvent() {
    if(powerToggle === true) {
        actualEvent = "X KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}
function cEvent() {
    if(powerToggle === true) {
        actualEvent = "C KeyBoard"
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
}

function eventKey() {
    document.getElementById('event'). textContent = actualEvent;
}

function togglePower() {
    var result;
    if (powerToggle === true) {
        result = "Power is OFF";
        powerToggle = false;
    } else {
        result ="Power is ON";
        powerToggle = true;
    }
    document.getElementById('power'). textContent = result;
}

function styleMusic() {
    var result;
    if (musicStyle === 1) {
        result ="MP3 Style : 2";
        musicStyle = 2;
    } else {
        result = "MP3 Style : 1";
        musicStyle = 1;
    }
    document.getElementById('mp3'). textContent = result;
}

function adjustVolume() {
    actualVolume = document.querySelector('#key-volume').value;
    console.log(actualVolume);
}