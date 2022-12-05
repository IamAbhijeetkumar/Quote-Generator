const quoteText = document.querySelector('.quote');
authorName = document.querySelector('.author , .name');
quoteBtn = document.querySelector('button');
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");

// randam quote function
function randomQuote() {
    quoteBtn.innerText = "Loading Quote...."
    //fetching data from another api and parsing it in to javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";

    });
}

soundBtn.addEventListener('click',()=>{
    //SpeechSynthesisUtterance is a api help to speech the text element
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener('click',()=>{
    //writeText() writes the property text to string
  navigator.clipboard.writeText(quoteText.innerText);
  console.log("Coppied");
});
twitterBtn.addEventListener('click',()=>{
    let tweetUrl =`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
});

quoteBtn.addEventListener("click", randomQuote);