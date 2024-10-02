const headings = [
    `"Just look at how much that you have grown.<br>You're far from what you've known."`,
    `"Now this place mourns in gloom where we used to pour our hearts,<br>where flowers used to bloom."`,
    `"Into the great unknown, we're driving to infinity<br>as long as you are here with me."`,
    `"Kelan tayo muling magtatagpo?"`
];

let currentIndex = 0;
const headingElement = document.getElementById('changing-heading');

function changeHeading() {
    headingElement.style.opacity = 0;

    setTimeout(() => {
        headingElement.innerHTML = headings[currentIndex];
        headingElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % headings.length;
    }, 500);
}

// Display first lyric immediately
headingElement.innerHTML = headings[currentIndex];
currentIndex = (currentIndex + 1) % headings.length;

// Start changing lyrics after 5 seconds
setInterval(changeHeading, 5000);