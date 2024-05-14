var counter = 0;
var counterElement = document.getElementById('counter');
var quoteElement = document.getElementById('quote');

function beat() {
    counter++;
    counterElement.innerText = '累计积累功德' + counter + '次';
    fetchQuote();
}

function reset() {
    counter = 0;
    counterElement.innerText = '累计积累功德' + counter + '次';
    fetchQuote();
}

function fetchQuote() {
    fetch('https://quotes.rest/qod?language=en')
        .then(response => response.json())
        .then(data => {
            var quote = data.contents.quotes[0].quote;
            quoteElement.innerText = quote;
        })
        .catch(error => console.error('Error:', error));
}

window.onload = fetchQuote;
