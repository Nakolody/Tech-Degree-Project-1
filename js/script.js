/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
{quote: 'You miss 100 of the shots you don\'t take - Wayne Greski', source: "Michael Scott"},
{quote: 'It\'s just a flesh wound', source:"The Black Knight", citation: "Monty Python and the Holy Grail"},
{quote: 'This building must be at least... three times bigger than this!', source:'Derek Zoolander', year: "2001"},
{quote: 'I feel comfortable using legal jargon in every day life.', source:"Elle Woods"},
{quote: 'We get the warhead and we hold the world for ransom.... One million dollars.', source: "Dr. Evil"},
{quote: 'It\'s like I have ESPN or something', source:"Karen Smith", citation: "Mean Girls", year: "2004"}
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
  This function creates a random number according the number of objects in the array.
***/
function getRandomQuote (array){
  var randomNumber = Math.floor(Math.random()* array.length);
  return array[randomNumber];
}
function randomBackground () {
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);
  var background = "rgb(" + r + ", " + g + ", " + b + ")";
 document.body.style.background = background;
 console.log(background);
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
   This function builds the quote objects in html by pulling from the properties of the objects.
***/

function printQuote (){
  randomBackground();
  var randomQuote = getRandomQuote(quotes);
  var html = "<p class='quote'>"+ randomQuote.quote + "</p>";
  html += "<p class='source'>" + randomQuote.source;

if (randomQuote.year) {
  html += "<span class='year'>" + randomQuote.year + "</span>";
} 
if (randomQuote.citation){
  html += "<span class='citation'>" + randomQuote.citation + "</span></p>";
} else {
  html += "</p>";
}

document.getElementById("quote-box").innerHTML = html;
}
//document.body.style.background = 


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

