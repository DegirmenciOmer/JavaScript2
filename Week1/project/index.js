// your code goes in here
const quotes = [
"If opportunity doesn’t knock, build a door.",
"Wise men speak because they have something to say; fools because they have to say something.",
"Strive not to be a success, but rather to be of value.",
"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
"Do not let what you cannot do interfere with what you can do.",
"I haven’t failed. I’ve just found 10,000 ways that won’t work."
];
const authors = [
"Milton Berle",
"Plato",
"Albert Einstein",
"Robert Frost",
"John Wooden",
"Thomas Edison"
];


const quote = document.querySelector(".quote");
console.log(quote);
const author = document.querySelector(".author");
const button = document.querySelector("button");
console.log(button);


button.addEventListener("click", function(){
	const randomQuote = Math.floor(Math.random() * quotes.length);
	console.log(randomQuote);
  //const rgb = 'rgb(' + ranNum1 + ','+ ranNum2 + ',' + ranNum3 + ')';
  quote.textContent = quotes[randomQuote];
  author.textContent = authors[randomQuote];


});
