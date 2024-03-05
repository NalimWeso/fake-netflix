const randomPercent = Math.floor(Math.random() * (100 - 80 + 1)) + 80;

document.querySelector('.match-score').innerHTML = `${randomPercent}% Match`;

const episodes = [
    {
        id: 1,
        thumbnail: "video.jpg",
        title: "1. Our Great Washing Machines",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam, omnis eius possimus ipsum unde et aut, laudantium earum recusandae neque facilis! Facilis accusantium quasi officiis, ad asperiores fugiat totam."
    },
    {
        id: 2,
        thumbnail: "video.jpg",
        title: "2. Wash Day Wonders",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, commodi, sapiente rerum consectetur exercitationem voluptate asperiores culpa velit adipisci porro deleniti est? Iusto sint iste quis possimus quod rerum aperiam!"
    },
    {
        id: 3,
        thumbnail: "video.jpg",
        title: "3. Breaking the Mold",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum molestiae facere dignissimos recusandae eum, facilis quo quas, magnam accusantium, cupiditate quidem tenetur neque corporis! Amet voluptate laboriosam soluta dolorem?"
    },
    {
        id: 4,
        thumbnail: "video.jpg",
        title: "4. Behind Closed Doors",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel pariatur optio quo ullam, qui consequuntur cum sunt veniam ipsam numquam tempora nisi expedita autem doloribus suscipit ab similique exercitationem."
    },
    {
        id: 5,
        thumbnail: "video.jpg",
        title: "5. The Famous Spin Cycle",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ut! Et ducimus blanditiis soluta fuga dolorum labore expedita ipsa esse porro quae in, deserunt consequuntur ipsum, aspernatur, saepe amet harum?"
    },
    {
        id: 6,
        thumbnail: "video.jpg",
        title: "6. From Scrubbing to Spinning",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil cum alias asperiores repellat error ratione dolore quaerat maiores temporibus, nostrum ipsa, officia corrupti dolor officiis aut consectetur inventore! Dolor?"
    },
    {
        id: 7,
        thumbnail: "video.jpg",
        title: "7. Rinse, Spin, Refresh",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iste dolores fuga laudantium, at repellendus repellat est, iusto impedit sint obcaecati saepe incidunt autem deserunt blanditiis temporibus delectus mollitia repudiandae!"
    },
    {
        id: 8,
        thumbnail: "video.jpg",
        title: "8. Wash and Learn",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro repellat impedit qui molestiae eveniet eius neque adipisci est labore error fugit, cumque assumenda expedita iste quo, similique dignissimos unde."
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