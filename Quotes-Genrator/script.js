const Quoteapi = "https://api.quotable.io/random";

const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");

async function getQuote(Quoteapi) {
    try {
        const response = await fetch(Quoteapi);
        const data = await response.json();
        
        quoteText.innerHTML = data.content;
        authorName.innerHTML = data.author;
    } catch (error) {
        console.log("Error fetching quote:", error);
    }
}

getQuote(Quoteapi);

function tweetQuote() {
    window.open("https://twitter.com/intent/tweet?text="+quoteText.innerText+" - by: "+authorName.innerText, "Tweet Window", "width=600,height=400");
}