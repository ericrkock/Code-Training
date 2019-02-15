

01.   Add Document Elements with D3
         Use the select method to select the body tag in the document. Then append an h1 tag to it, and add the text "Learning D3" into the h1 element.
            <body>
               <script>
                  // Add your code below this line
                     d3.select("body")
                        .append("h1")
                        .text("Learning D3");
                  // Add your code above this line
               </script>
            </body>

02.   Select a Group of Elements with D3
         Select all of the li tags in the document, and change their text to "list item" by chaining the .text() method.
            <body>
               <ul>
                  <li>Example</li>
                  <li>Example</li>
                  <li>Example</li>
               </ul>
               <script>
                  // Add your code below this line
                     d3.selectAll("li")
                        .text("list item");
                  // Add your code above this line
               </script>
            </body>

03.   Work with Data in D3
         Select the body node, then select all h2 elements. Have D3 create and append an h2 tag for each item in the dataset array. The text in the h2 should say "New Title". Your code should use the data() and enter() methods.
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  // Add your code below this line
                     d3.select("body").selectAll("h2")
                        .data(dataset)
                        .enter()
                        .append("h2")
                        .text("New Title");
                  // Add your code above this line
               </script>
            </body>

04.   Work with Dynamic Data in D3
         Change the text() method so that each h2 element displays the corresponding value from the dataset array with a single space and "USD". For example, the first heading should be "12 USD".
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  d3.select("body").selectAll("h2")
                     .data(dataset)
                     .enter()
                     .append("h2")
                     // Add your code below this line
                        .text((d) => d + " USD");
                     // Add your code above this line
               </script>
            </body>

05.   Add Inline Styling to Elements
         Add the style() method to the code in the editor to make all the displayed text have a font-family of verdana.
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  d3.select("body").selectAll("h2")
                     .data(dataset)
                     .enter()
                     .append("h2")
                     .text((d) => (d + " USD"))
                     // Add your code below this line
                        .style("font-family", "verdana");
                     // Add your code above this line
               </script>
            </body>

06.   Change Styles Based on Data
         Add the style() method to the code in the editor to set the color of the h2 elements conditionally. Write the callback function so if the data value is less than 20, it returns "red", otherwise it returns "green".
         >> Note: You can use if-else logic, or the ternary operator.
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  d3.select("body").selectAll("h2")
                     .data(dataset)
                     .enter()
                     .append("h2")
                     .text((d) => (d + " USD"))
                     // Add your code below this line
                        .style("color", (d) => {
                           if (d < 20) {
                              return "red"
                           } else {
                              return "green"
                           }
                        });
                     // Add your code above this line
               </script>
            </body>

07.   Add Classes with D3
         Add the attr() method to the code in the editor and put a class of bar on the div elements.
            <style>
               .bar {
                  width: 25px;
                  height: 100px;
                  display: inline-block;
                  background-color: blue;
               }
            </style>
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  d3.select("body").selectAll("div")
                     .data(dataset)
                     .enter()
                     .append("div")
                     // Add your code below this line
                        .attr("class", "bar");
                     // Add your code above this line
               </script>
            </body>

08.   Update the Height of an Element Dynamically
         Add the style() method to the code in the editor to set the height property for each element. Use a callback function to return the value of the data point with the string "px" added to it.
            <style>
               .bar {
                  width: 25px;
                  height: 100px;
                  display: inline-block;
                  background-color: blue;
               }
            </style>
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  d3.select("body").selectAll("div")
                     .data(dataset)
                     .enter()
                     .append("div")
                     .attr("class", "bar")
                     // Add your code below this line
                        .style("height", (d) => d);
                     // Add your code above this line
               </script>
            </body>
09.   Change the Presentation of a Bar Chart
         First, add a margin of 2px to the bar class in the style tag. Next, change the callback function in the style() method so it returns a value 10 times the original data value (plus the "px").
         >> Note: Multiplying each data point by the same constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.
            <style>
               .bar {
                  width: 25px;
                  height: 100px;
                  /* Add your code below this line */
                     margin: 2px;
                  /* Add your code above this line */
                  display: inline-block;
                  background-color: blue;
               }
            </style>
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  d3.select("body").selectAll("div")
                     .data(dataset)
                     .enter()
                     .append("div")
                     .attr("class", "bar")
                     // Add your code below this line
                        .style("height", (d) => (d*10 + "px"))
                     // Add your code above this line
               </script>
            </body>

10.   Learn About SVG in D3 | SVG stands for Scalable Vector Graphics.
         Add an svg node to the body using append(). Give it a width attribute set to the provided w constant and a height attribute set to the provided h constant using the attr() method for each. You'll see it in the output because there's a background-color of pink applied to it in the style tag.
         >> Note: Width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.
            <style>
               svg {
                  background-color: pink;
               }
            </style>
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  const w = 500;
                  const h = 100;
                  const svg = d3.select("body");
                  // Add your code below this line
                     .append("svg")
                     .attr("width", (w))
                     .attr("height", (h));
                  // Add your code above this line
               </script>
            </body>

11.   Display Shapes with SVG
         Add a rect shape to the svg using append(), and give it a width attribute of 25 and height attribute of 100. Also, give the rect x and y attributes each set to 0.
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  const w = 500;
                  const h = 100;
                  const svg = d3.select("body")
                     .append("svg")
                     .attr("width", w)
                     .attr("height", h)
                  // Add your code below this line
                     .append("rect")
                     .attr("width", 25)
                     .attr("height", 100)
                     .attr("x", 0)
                     .attr("y", 0);
                  // Add your code above this line
               </script>
            </body>

12.   Create a Bar for Each Data Point in the Set
         Use the data(), enter(), and append() methods to create and append a rect for each item in dataset. The bars should display all on top of each other, this will be fixed in the next challenge.
            <body>
               <script>
                  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
                  const w = 500;
                  const h = 100;
                  const svg = d3.select("body")
                     .append("svg")
                     .attr("width", w)
                     .attr("height", h);
                  svg.selectAll("rect")
                  // Add your code below this line
                  // Add your code above this line
                     .attr("x", 0)
                     .attr("y", 0)
                     .attr("width", 25)
                     .attr("height", 100);
               </script>
            </body>

13.   Dynamically Set the Coordinates for Each Bar
14.   Dynamically Change the Height of Each Bar
15.   Invert SVG Elements
16.   Change the Color of an SVG Element
17.   Add Labels to D3 Elements
18.   Style D3 Labels
19.   Add a Hover Effect to a D3 Element
20.   Add a Tooltip to a D3 Element
21.   Create a Scatterplot with SVG Circles
22.   Add Attributes to the Circle Elements
23.   Add Labels to Scatter Plot Circles
24.   Create a Linear Scale with D3
25.   Set a Domain and a Range on a Scale
26.   Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
27.   Use Dynamic Scales
28.   Use a Pre-Defined Scale to Place Elements
29.   Add Axes to a Visualization