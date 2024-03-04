const randomPercent = Math.floor(Math.random() * (100 - 80 + 1)) + 80;

document.querySelector('.match-score').innerHTML = `${randomPercent}% Match`;