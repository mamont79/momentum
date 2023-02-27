const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

quote.textContent = "text";
author.textContent = "text";


async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();

    const len = data.length;
    let quoteNum = Math.floor(Math.random() * len);

    quote.textContent = data[quoteNum]["text"];
    author.textContent = data[quoteNum]["author"];



}


getQuotes()