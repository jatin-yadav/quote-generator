const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");
const tweetBtn = document.getElementById("tweet");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(apiUrl);

newQuoteBtn.addEventListener("click", () => {
  getQuote(apiUrl);
});

tweetBtn.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600,height=400"
  );
});
