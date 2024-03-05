const randomPercent = Math.floor(Math.random() * (100 - 80 + 1)) + 80;

document.querySelector('.match-score').innerHTML = `${randomPercent}% Match`;

const episodes = [
    {
        id: 1,
        thumbnail: "video.jpg",
        title: "1. Our Great Washing Machines",
        description: " Join us as we delve into the fascinating history and evolution of washing machines. From hand-cranked contraptions to modern marvels, discover the innovations that revolutionized laundry day."
    },
    {
        id: 2,
        thumbnail: "video.jpg",
        title: "2. Wash Day Wonders",
        description: "Explore the daily rituals and challenges of laundry day across different cultures and time periods. From ancient methods to cutting-edge technology, witness the enduring significance of this household chore."
    },
    {
        id: 3,
        thumbnail: "video.jpg",
        title: "3. Breaking the Mold",
        description: "Uncover the science behind washing machines and their role in maintaining cleanliness and hygiene. Learn about the battle against mold and mildew, and how modern innovations are tackling this age-old problem."
    },
    {
        id: 4,
        thumbnail: "video.jpg",
        title: "4. Behind Closed Doors",
        description: "Journey behind the scenes of the laundry room to uncover the secrets and surprises lurking within. From lost socks to unexpected discoveries, witness the drama and humor of everyday laundry life."
    },
    {
        id: 5,
        thumbnail: "video.jpg",
        title: "5. The Famous Spin Cycle",
        description: "Step into the whirlwind world of the spin cycle, where clothes are tossed and tumbled to perfection. Explore the mechanics and magic behind this iconic stage of the washing process."
    },
    {
        id: 6,
        thumbnail: "video.jpg",
        title: "6. From Scrubbing to Spinning",
        description: "Trace the evolution of laundry techniques from manual scrubbing to automated spinning. Follow the journey of labor-saving devices and their impact on households throughout history."
    },
    {
        id: 7,
        thumbnail: "video.jpg",
        title: "7. Rinse, Spin, Refresh",
        description: "Experience the satisfaction of a freshly laundered load as we dive into the final stages of the washing process. Discover the secrets to achieving the ultimate clean and refresh for your garments."
    },
    {
        id: 8,
        thumbnail: "video.jpg",
        title: "8. Wash and Learn",
        description: "Conclude our journey with valuable gained from the world of washing machines. From sustainability tips to laundry hacks, empower yourself with knowledge to conquer laundry day with ease."
    }
];

let episodesHTML = '';

episodes.forEach((episode) => {
    episodesHTML += `
    <div class="episode" id="${episode.id}">
        <div class="episode-img">
            <img src="${episode.thumbnail}" alt="Thumbnail">
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