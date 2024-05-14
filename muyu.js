let counter = 0;

async function fetchQuote() {
    try {
        const response = await fetch('https://quotes.rest/qod?language=en');
        const data = await response.json();
        const quote = data.contents.quotes[0].quote;
        const p = document.createElement('p');
        p.textContent = quote;
        document.querySelector("#quoteArea").appendChild(p);
    } catch (error) {
        console.error('Error:', error);
    }
}

function beat() {
    counter++;
    document.querySelector("#counter").textContent = `累计积累功德${counter}次`;
    fetchQuote();
}

function resetCounter() {
    counter = 0;
    document.querySelector("#counter").textContent = `累计积累功德${counter}次`;
    const quoteArea = document.querySelector("#quoteArea");
    while (quoteArea.firstChild) {
        quoteArea.removeChild(quoteArea.firstChild);
    }
}
