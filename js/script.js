/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {quote: "Watch your thoughts, for they will become actions. Watch your actions, for they will become habits. Watch your habits for they will forge your character. Watch your character, for it will make your destiny.", source: "Margaret Hilda Thatcher"},
  {quote: "I Have A Dream", source: "Martin Luther King Junior"},
  {quote: "Stay hungry, stay foolish", source: "Steve Jobs"},
  {quote: "Do not worry, You will know my name soon.", source: "Daiki Iwata", year: "2023"},
  {quote: "Try not to become a man of success, but rather try to become a man of value.", source: "Albert Einstein"},
  {quote: "The difference between winning and losing is most often not quitting", source: "Walt Disney", citation: "https://www.positivitysparkles.com/quote/difference-winning-losing-oftennot-quitting-walt-disney/"}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}


/***
 * `printQuote` function
***/
function printQuote () {
  let quote1 = getRandomQuote();
  let storeHtml = `<p class="quote"> ${quote1.quote} </p>
  <p class="source"> ${quote1.source} </p>`;

  if (quote1.citation) {
  storeHtml += `<span class="citation> ${quote1.citation} </span>`
  }
  if (quote1.year) {
  storeHtml += `<span class="year"> ${quote1.year} </span>`
  }

  document.getElementById("quote-box").innerHTML = storeHtml;
}

// document.getElementById("quote-box").innerHTML = printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
