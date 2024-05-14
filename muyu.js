let counter = 0;

function fetchQuote() {
    fetch('https://quotes.rest/qod?language=en')
        .then(response => response.json())
        .then(data => {
            const quoteText = data.contents.quotes[0].quote;
            const quoteElement = document.createElement('p');
            quoteElement.textContent = quoteText;

            document.getElementById('quoteArea').appendChild(quoteElement);
        })
        .catch(error => console.error('Error:', error));
}

function beat() {
    counter += 1;
    document.getElementById('counter').textContent = `累计积累功德${counter}次`;

    fetchQuote();
}

function resetCounter() {
    counter = 0;
    document.getElementById('counter').textContent = `累计积累功德${counter}次`;

    const quoteArea = document.getElementById('quoteArea');
    while (quoteArea.firstChild) {
        quoteArea.removeChild(quoteArea.firstChild);
    }
}

beat();
