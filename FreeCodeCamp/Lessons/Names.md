

AJAX  : Asynchronous JavaScript and XML
API   : Application Programming Interfaces
            req = new XMLHttpRequest();
            req.open("GET", "/path/filename.json", true);
            req.send();
            req.onload=function() {
               json=JSON.parse(req.responseText);
               document.getElementsByClassName("message")[0].innerHTML=JSON.stringify(json);
            };

               [ ] -> Square brackets represent an array
               { } -> Curly brackets represent an object
               " " -> Double quotes represent a string. They are also used for key names in JSON

HTML  : Hypertext Markup Language / Markup
JS    : JavaScript / Laguage
JSON  : JavaScript Object Notation
JSX   : React JS / Library
PHP   : Personal Home Page / Language
REST API : REpresentational State Transfer API
SHELL :
XML   : Extensible Markup Language / Markup

.env  : Hidden file to pass Environment variables to your application


Add Install FontAwesome in React
   URL: https://www.npmjs.com/package/@fortawesome/react-fontawesome
   URL: https://programmingwithmosh.com/react/font-awesome-5-with-react/
   URL: https://stackoverflow.com/questions/23116591/how-to-include-a-font-awesome-icon-in-reacts-render

   $ npm i --save @fortawesome/fontawesome-svg-core
   $ npm i --save @fortawesome/free-solid-svg-icons
   $ npm i --save @fortawesome/free-brands-svg-icons
   $ npm i --save @fortawesome/react-fontawesome

   $ npm i --save @fortawesome/free-regular-svg-icons

   $ npm i --save @fortawesome/fontawesome

   $ npm i --save @fortawesome/fontawesome-free-solid
   $ npm i --save @fortawesome/fontawesome-free-regular