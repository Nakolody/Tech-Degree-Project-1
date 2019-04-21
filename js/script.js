/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Creating an array of quote objects.
var quotes = [
{quote: 'You miss 100 of the shots you don\'t take - Wayne Greski', source: "Michael Scott"},
{quote: 'It\'s just a flesh wound', source:"The Black Knight", citation: "Monty Python and the Holy Grail"},
{quote: 'This building must be at least... three times bigger than this!', source:'Derek Zoolander', year: "2001"},
{quote: 'I feel comfortable using legal jargon in every day life.', source:"Elle Woods"},
{quote: 'We get the warhead and we hold the world for ransom.... One million dollars.', source: "Dr. Evil"},
{quote: 'It\'s like I have ESPN or something', source:"Karen Smith", citation: "Mean Girls", year: "2004"}
];



// Functions for getting a random quote from an array

function getRandomQuote (array){
  var randomNumber = Math.floor(Math.random()* array.length);
  return array[randomNumber];
}

//Function to get random background color

function randomBackground () {
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);
  var background = "rgb(" + r + ", " + g + ", " + b + ")";
 document.body.style.background = background;
 console.log(background);
}

//Function to display random quote and build html.

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



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


