
//
// CHART BAR
//

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
                     .data(dataset)
                     .enter()
                     .append("rect")
                  // Add your code above this line
                     .attr("x", 0)
                     .attr("y", 0)
                     .attr("width", 25)
                     .attr("height", 100);
               </script>
            </body>

13.   Dynamically Set the Coordinates for Each Bar
         Change the x attribute callback function so it returns the index times 30.
         >> Note: Each bar has a width of 25, so increasing each x value by 30 adds some space between the bars. Any value greater than 25 would work in this example.
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
                     .data(dataset)
                     .enter()
                     .append("rect")
                     .attr("x", (d, i) => 
                     // Add your code below this line
                        i*30
                     // Add your code above this line
                     )
                     .attr("y", 0)
                     .attr("width", 25)
                     .attr("height", 100);
               </script>
            </body>


14.   Dynamically Change the Height of Each Bar
         Change the callback function for the height attribute to return the data value times 3.
         >> Note: Remember that multiplying all data points by the same constant scales the data (like zooming in). It helps to see the differences between bar values in this example.
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
                     .data(dataset)
                     .enter()
                     .append("rect")
                     .attr("x", (d, i) => i * 30)
                     .attr("y", 0)
                     .attr("width", 25)
                     .attr("height", (d, i) => 
                     // Add your code below this line
                        d*3
                     // Add your code above this line
                     );
               </script>
            </body>

15.   Invert SVG Elements
         Change the callback function for the y attribute to set the bars right-side-up. Remember that the height of the bar is 3 times the data value d.
         >> Note: In general, the relationship is y = h - m * d, where m is the constant that scales the data points.
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
                     .data(dataset)
                     .enter()
                     .append("rect")
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => 
                     // Add your code below this line
                        h - 3 * d
                     // Add your code above this line
                     )
                     .attr("width", 25)
                     .attr("height", (d, i) => 3 * d);
               </script>
            </body>

16.   Change the Color of an SVG Element
         Add an attr() method to set the "fill" of all the bars to the color "navy".
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
                     .data(dataset)
                     .enter()
                     .append("rect")
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => h - 3 * d)
                     .attr("width", 25)
                     .attr("height", (d, i) => 3 * d)
                     // Add your code below this line
                        .attr("fill", "navy")
                     // Add your code above this line
               </script>
            </body>

17.   Add Labels to D3 Elements
         The code in the editor already binds the data to each new text element. First, append text nodes to the svg. Next, add attributes for the x and y coordinates. They should be calculated the same way as the rect ones, except the y value for the text should make the label sit 3 units higher than the bar. Finally, use the D3 text() method to set the label equal to the data point value.
         >> Note: For the label to sit higher than the bar, decide if the y value for the text should be 3 greater or 3 less than the y value for the bar.
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
                     .data(dataset)
                     .enter()
                     .append("rect")
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => h - 3 * d)
                     .attr("width", 25)
                     .attr("height", (d, i) => 3 * d)
                     .attr("fill", "navy");
                  svg.selectAll("text")
                     .data(dataset)
                     .enter()
                     // Add your code below this line
                        .append("text")
                        .text((d) => d)
                        .attr("x", (d, i) => i * 30)
                        .attr("y", (d, i) => h - (3 * d) - 3)
                     // Add your code above this line
               </script>
            <body>

18.   Style D3 Labels
         Set the font-size of the text elements to 25px, and the color of the text to red.
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
                     .data(dataset)
                     .enter()
                     .append("rect")
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => h - 3 * d)
                     .attr("width", 25)
                     .attr("height", (d, i) => d * 3)
                     .attr("fill", "navy");
                  svg.selectAll("text")
                     .data(dataset)
                     .enter()
                     .append("text")
                     .text((d) => d)
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => h - (3 * d) - 3)
                     // Add your code below this line
                        .attr("fill", "red")
                        .style("font-size", 25+ "px")
                     // Add your code above this line
               </script>
            </body>

19.   Add a Hover Effect to a D3 Element
         Use the attr() method to add a class of bar to all the rect elements. This changes the fill color of the bar to brown when you mouse over it.
            <style>
               .bar:hover {
                  fill: brown;
               }
            </style>
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
                     .data(dataset)
                     .enter()
                     .append("rect")
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => h - 3 * d)
                     .attr("width", 25)
                     .attr("height", (d, i) => 3 * d)
                     .attr("fill", "navy")
                     // Add your code below this line
                        .attr("class", "bar")
                     // Add your code above this line
                  svg.selectAll("text")
                     .data(dataset)
                     .enter()
                     .append("text")
                     .text((d) => d)
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => h - (3 * d) - 3);
               </script>
            </body>

20.   Add a Tooltip to a D3 Element
         Append a title element under each rect node. Then call the text() method with a callback function so the text displays the data value.
            <style>
               .bar:hover {
                  fill: brown;
               }
            </style>
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
                     .data(dataset)
                     .enter()
                     .append("rect")
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => h - 3 * d)
                     .attr("width", 25)
                     .attr("height", (d, i) => d * 3)
                     .attr("fill", "navy")
                     .attr("class", "bar")
                     // Add your code below this line
                        .append("title")
                        .text((d) => d)
                     // Add your code above this line
                  svg.selectAll("text")
                     .data(dataset)
                     .enter()
                     .append("text")
                     .text((d) => d)
                     .attr("x", (d, i) => i * 30)
                     .attr("y", (d, i) => h - (d * 3 + 3))   
               </script>
            </body>

//
// SCATTERPLOT - CIRCLES
//

21.   Create a Scatterplot with SVG Circles
         Use the data(), enter(), and append() methods to bind dataset to new circle elements that are appended to the SVG canvas.
         >> Note: The circles won't be visible because we haven't set their attributes yet. We'll do that in the next challenge.
            <body>
               <script>
                  const dataset = [
                                 [ 34,    78 ],
                                 [ 109,   280 ],
                                 [ 310,   120 ],
                                 [ 79,    411 ],
                                 [ 420,   220 ],
                                 [ 233,   145 ],
                                 [ 333,   96 ],
                                 [ 222,   333 ],
                                 [ 78,    320 ],
                                 [ 21,    123 ]
                              ];
                  const w = 500;
                  const h = 500;
                  const svg = d3.select("body")
                                 .append("svg")
                                 .attr("width", w)
                                 .attr("height", h);
                  svg.selectAll("circle")
                     // Add your code below this line
                        .data(dataset)
                        .enter()
                        .append("circle")
                     // Add your code above this line
               </script>
            </body>

22.   Add Attributes to the Circle Elements
         Add cx, cy, and r attributes to the circle elements. The cx value should be the first number in the array for each item in dataset. The cy value should be based off the second number in the array, but make sure to show the chart right-side-up and not inverted. The r value should be 5 for all circles.
            <body>
               <script>
                  const dataset = [
                                 [ 34,    78 ],
                                 [ 109,   280 ],
                                 [ 310,   120 ],
                                 [ 79,    411 ],
                                 [ 420,   220 ],
                                 [ 233,   145 ],
                                 [ 333,   96 ],
                                 [ 222,   333 ],
                                 [ 78,    320 ],
                                 [ 21,    123 ]
                              ];
                  const w = 500;
                  const h = 500;
                  const svg = d3.select("body")
                                 .append("svg")
                                 .attr("width", w)
                                 .attr("height", h);
                  svg.selectAll("circle")
                     .data(dataset)
                     .enter()
                     .append("circle")
                     // Add your code below this line
                        .attr("cx", (d, i) => d[0])
                        .attr("cy", (d, i) => h - d[1])
                        .attr("r",5)
                     // Add your code above this line
               </script>
            </body>

23.   Add Labels to Scatter Plot Circles
         Label each point on the scatter plot using the text elements. The text of the label should be the two values separated by a comma and a space. For example, the label for the first point is "34, 78". Set the x attribute so it's 5 units more than the value you used for the cx attribute on the circle. Set the y attribute the same way that's used for the cy value on the circle.
            <body>
               <script>
                  const dataset = [
                                 [ 34,    78 ],
                                 [ 109,   280 ],
                                 [ 310,   120 ],
                                 [ 79,    411 ],
                                 [ 420,   220 ],
                                 [ 233,   145 ],
                                 [ 333,   96 ],
                                 [ 222,   333 ],
                                 [ 78,    320 ],
                                 [ 21,    123 ]
                              ];
                  const w = 500;
                  const h = 500;
                  const svg = d3.select("body")
                                 .append("svg")
                                 .attr("width", w)
                                 .attr("height", h);
                  svg.selectAll("circle")
                     .data(dataset)
                     .enter()
                     .append("circle")
                     .attr("cx", (d, i) => d[0])
                     .attr("cy", (d, i) => h - d[1])
                     .attr("r", 5);
                  svg.selectAll("text")
                     .data(dataset)
                     .enter()
                     .append("text")
                     // Add your code below this line
                        .text((d, i) => d[0] + ", " + d[1])
                        .attr("x", (d, i) => d[0] + 5)
                        .attr("y", (d, i) => h - d[1])
                     // Add your code above this line
               </script>
            </body>

//
// LINEAR SCALE
//

24.   Create a Linear Scale with D3
         Change the scale variable to create a linear scale. Then set the output variable to the scale called with an input argument of 50.
            <body>
               <script>
                  // Add your code below this line
                     const scale = d3.scaleLinear(); // Create the scale here
                     const output = scale(50); // Call the scale with an argument here
                  // Add your code above this line
                  d3.select("body")
                     .append("h2")
                     .text(output);
               </script>
            </body>

25.   Set a Domain and a Range on a Scale
         Create a scale and set its domain to [250, 500] and range to [10, 150].
         >> Note: You can chain the domain() and range() methods onto the scale variable.
            <body>
               <script>
                  // Add your code below this line
                     const scale = d3.scaleLinear();
                     scale.domain([250, 500]);
                     scale.range([10, 150]);
                  // Add your code above this line
                  const output = scale(50);
                  d3.select("body")
                     .append("h2")
                     .text(output);
               </script>
            </body>

26.   Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
         The positionData variable holds a 3-dimensional (3D) array. Use a D3 method to find the maximum value of the z coordinate (the third value) from the arrays and save it in the output variable.
         >> Note: Fun fact - D3 can plot 3D arrays.
            <body>
               <script>
                  const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
                  // Add your code below this line
                     const output = d3.max(positionData, (d) => d[2] ); // Change this line
                  // Add your code above this line
                  d3.select("body")
                     .append("h2")
                     .text(output)
               </script>
            </body>

27.   Use Dynamic Scales
         Use the yScale variable to create a linear y-axis scale. The domain should start at zero and go to the maximum y value in the set. The range should use the SVG height (h) and include padding.
         >> Note: Remember to keep the plot right-side-up. When you set the range for the y coordinates, the higher value (height minus padding) is the first argument, and the lower value is the second argument.
            <body>
               <script>
                  const dataset = [
                                 [ 34,    78 ],
                                 [ 109,   280 ],
                                 [ 310,   120 ],
                                 [ 79,    411 ],
                                 [ 420,   220 ],
                                 [ 233,   145 ],
                                 [ 333,   96 ],
                                 [ 222,   333 ],
                                 [ 78,    320 ],
                                 [ 21,    123 ]
                              ];
                  const w = 500;
                  const h = 500;
                  // Padding between the SVG canvas boundary and the plot
                     const padding = 30;
                  // Create an x and y scale
                  const xScale = d3.scaleLinear()
                                 .domain([0, d3.max(dataset, (d) => d[0])])
                                 .range([padding, w - padding]);
                  // Add your code below this line
                     const yScale = undefined;
                  // Add your code above this line
                  const output = yScale(411); // Returns 30
                  d3.select("body")
                     .append("h2")
                     .text(output)
               </script>
            </body>

28.   Use a Pre-Defined Scale to Place Elements
29.   Add Axes to a Visualization