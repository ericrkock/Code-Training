JSON APIs and Ajax

   Now you'll take a closer look at the returned data to better understand the JSON format. Recall some notation in JavaScript:
   [ ] -> Square brackets represent an array
   { } -> Curly brackets represent an object
   " " -> Double quotes represent a string. They are also used for key names in JSON

1. Handle Click Events with JavaScript using the onclick property
      Add a click event handler inside of the DOMContentLoaded function for the element with id of getMessage.
         document.addEventListener('DOMContentLoaded',function(){
         // Add your code below this line
         >>    document.getElementById("getMessage").onclick=function() {};
         // Add your code above this line
         });

2. Change Text with click Events
      Add code inside the onclick event handler to change the text inside the message element to say "Here is the message".
         document.addEventListener('DOMContentLoaded',function(){
            document.getElementById('getMessage').onclick=function(){
            // Add your code below this line
         >>    document.getElementsByClassName("message")[0].textContent = "Here is the message";
            // Add your code above this line
            }
         });        

3. Get JSON with the JavaScript XMLHttpRequest Method
      Update the code to create and send a "GET" request to the freeCodeCamp Cat Photo API. Then click the "Get Message" button. Your AJAX function will replace the "The message will go here" text with the raw JSON output from the API.
         document.addEventListener('DOMContentLoaded',function(){
            document.getElementById('getMessage').onclick=function(){
            // Add your code below this line
         >>    req = new XMLHttpRequest();
               re.open("GET", "/json/cats.json", true);
               req.send();
               re.onload = function() {
                  json = JSON.parse(req.responseText);
                  document.getElementsByClassName("message")[0].innerHTML = JSON.stringify(json);
               }
            // Add your code above this line
            };
         });

4. Access the JSON Data from an API
      For the cat with the "id" of 2, print to the console the second value in the codeNames array. You should use bracket and dot notation on the object (which is saved in the variable json) to access the value.
         document.addEventListener('DOMContentLoaded',function(){
            document.getElementById('getMessage').onclick=function(){
               req=new XMLHttpRequest();
               req.open("GET",'/json/cats.json',true);
               req.send();
               req.onload=function(){
                  json=JSON.parse(req.responseText);
                  document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
                  // Add your code below this line
            >>       document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json[2].codeNames[1]);
                  // Add your code above this line
               };
            };
         });

5.  Convert JSON Data to HTML
      Add a forEach method to loop over the JSON data and create the HTML elements to display it.
         document.addEventListener('DOMContentLoaded',function(){
            document.getElementById('getMessage').onclick=function(){
               req=new XMLHttpRequest();
               req.open("GET",'/json/cats.json',true);
               req.send();
               req.onload=function(){
                  json=JSON.parse(req.responseText);
                  var html = "";
                  // Add your code below this line
               >>    json.forEach(function(val) {
                        var keys = Object.key(val);
                        html += "<div class = 'cat'>";
                        keys.forEach(function(key) {
                           html+= "<strong>" + key + "</strong>: " + val[key] + "<br>";
                        });
                        html += "</div><br>";
                     });
                  // Add your code above this line
                  document.getElementsByClassName('message')[0].innerHTML=html;
               };
            };
         });

6. Render Images from Data Sources
      Add code to use the imageLink and altText properties in an img tag.
         document.addEventListener('DOMContentLoaded',function(){
            document.getElementById('getMessage').onclick=function(){
               req=new XMLHttpRequest();
               req.open("GET",'/json/cats.json',true);
               req.send();
               req.onload=function(){
                  json=JSON.parse(req.responseText);
                  var html = "";
                  json.forEach(function(val) {
                     html += "<div class = 'cat'>";
                     // Add your code below this line
            >>          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
                     // Add your code above this line
                     html += "</div><br>";
                  });
                  document.getElementsByClassName('message')[0].innerHTML=html;
               };
            };
         });

7. Pre-filter JSON to Get the Data You Need
      Add code to filter the json data to remove the cat with the "id" value of 1.
         document.addEventListener('DOMContentLoaded',function(){
            document.getElementById('getMessage').onclick=function(){
               req=new XMLHttpRequest();
               req.open("GET",'/json/cats.json',true);
               req.send();
               req.onload=function(){
                  json=JSON.parse(req.responseText);
                  var html = "";
                  // Add your code below this line        
            >>       json = json.filter(function(val) {
                        return (val.id !== 1);
                     });
                  // Add your code above this line
                  json.forEach(function(val) {
                     html += "<div class = 'cat'>"
                     html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"
                     html += "</div>"
                  });
                  document.getElementsByClassName('message')[0].innerHTML=html;
               };
            }; 
         });

8. Get Geolocation Data to Find A User's GPS Coordinates
      Add the example code inside the script tags to check a user's current location and insert it into the HTML.         
         if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position) {
               document.getElementById('data').innerHTML="latitude: "+ position.coords.latitude + "<br>longitude: " + position.coords.longitude;
            });
         }

9. Post Data with the JavaScript XMLHttpRequest Method
      Update the code to create and send a "POST" request. Then enter your name in input box and click "Send Message". Your AJAX function will replace "Reply from Server will be here." with the reply of the server. In this case, it is your name appended with " loves cats".
         document.addEventListener('DOMContentLoaded',function(){
            document.getElementById('sendMessage').onclick=function(){
               var userName=document.getElementById('name').value;
               // Add your code below this line
            >>    req=new XMLHttpRequest();
                  req.open("POST",url,true);
                  req.setRequestHeader('Content-Type','text/plain');
                  req.onreadystatechange=function(){
                     if(req.readyState==4 && req.status==200){
                        document.getElementsByClassName('message')[0].innerHTML=req.responseText;
                     }
                  };
                  req.send(userName);
               // Add your code above this line
            };
         });