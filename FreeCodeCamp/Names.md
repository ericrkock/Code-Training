

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
XML   : Extensible Markup Language / Markup