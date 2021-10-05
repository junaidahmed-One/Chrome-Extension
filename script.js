
const randomIndex = Math.floor(Math.random() * (2999 -1 + 1) + 1);

fetch('https://type.fit/api/quotes')
    .then(data => data.json())
    .then(quoteData => {
        const quoteText = quoteData[randomIndex].text;
        const quoteEle = document.getElementById('pTag');

        quoteEle.innerHTML = quoteText;
    })