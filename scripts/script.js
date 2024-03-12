import { episodes } from './episodes.js';

const randomPercent = Math.floor(Math.random() * (100 - 80 + 1)) + 80;

document.querySelector('.match-score').innerHTML = `${randomPercent}% Match`;

let episodesHTML = '';

episodes.forEach((episode) => {
    episodesHTML += `
    <div class="episode" id="${episode.id}">
        <div class="episode-img">
            <img src="images/${episode.thumbnail}" alt="Thumbnail" draggable=false>
            <div class="play-episode-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                    <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                </svg>
            </div>
        </div>
        <div class="episode-info">
            <p class="episode-title">${episode.title}</p>
            <p class="episode-description">
                ${episode.description}
            </p>
        </div>
    </div>
    `;
});

document.querySelector('.episodes-list').innerHTML = episodesHTML;

let svgNotToAdd = `
<svg class="checked" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
    <path 
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/>
</svg>
`;

let svgToAdd = `
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
    <path
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
</svg>
`;

document.querySelector('.close-button svg').addEventListener('click', () => {
    document.querySelector('.series-details').innerHTML = '';
});

let svgWatchlist = false;

document.querySelector('.watchlist-button').addEventListener('click', () => {
    if (svgWatchlist === false) {
        document.querySelector('.watchlist-button').innerHTML = svgNotToAdd;
        svgWatchlist = true;
    }
    else {
        document.querySelector('.watchlist-button').innerHTML = svgToAdd;
        svgWatchlist = false;
    }
});

let svgLike = false;

document.querySelector('.like-button').addEventListener('click', () => {
    if (svgLike === false) {
        document.querySelector('.like-button svg').classList.add('checked');
        svgLike = true;
    }
    else {
        document.querySelector('.like-button svg').classList.remove('checked');
        svgLike = false;
    }
});