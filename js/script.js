/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



// ①Store many objects that must contain quote and source in the quotes array
const quotes = [
  {quote: "Watch your thoughts, for they will become actions. Watch your actions, for they will become habits. Watch your habits for they will forge your character. Watch your character, for it will make your destiny.", source: "Margaret Hilda Thatcher", tags: "enlightenment"},
  {quote: "I Have A Dream", source: "Martin Luther King Junior", tags: "history"},
  {quote: "Stay hungry, stay foolish", source: "Steve Jobs", tags: "enlightenment"},
  {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", source: "Mother Teresa", citation: "blog.hubspot.com", year: "2023", tags: "enlightenment"},
  {quote: "Try not to become a man of success, but rather try to become a man of value.", source: "Albert Einstein", tags: "enlightenment"},
  {quote: "The difference between winning and losing is most often not quitting", source: "Walt Disney", tags: "enlightenment"}
];



// ②Pick a random object from the quotes array and return it
function getRandomQuote(){
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}



// ③Select the value to be displayed on the screen and store it in the "#quote-box"
function printQuote(){
  let randomQuote = getRandomQuote();
  let randomHtml = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} </p>`;

  if(randomQuote.citation){
  randomHtml += `<span class="citation"> ${randomQuote.citation} </span>`
  }
  if(randomQuote.year){
  randomHtml += `<span class="year"> ${randomQuote.year} </span>`
  }

  document.getElementById("quote-box").innerHTML = randomHtml;

}



// ④A new quot appears every time you press the button
document.getElementById('load-quote').addEventListener("click", printQuote, false);
