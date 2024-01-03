//initialize variables
const visitDisplay = document.querySelector("#visits");
let lastVisit = getLastVisit();
let currentVisit = Date.now();
let diff = getDiff(currentVisit, lastVisit);

// Set last visit
function setLastVisit() {
    localStorage.setItem('lastVisit', JSON.stringify(currentVisit));
}

// Get last visit
function getLastVisit() {
    return JSON.parse(localStorage.getItem('lastVisit'));
}

function getDiff(currentVisit, lastVisit) {
    return Math.floor((currentVisit - lastVisit) / 86400000); // Use Math.floor to round down to a whole number
}

if (lastVisit == null) {
    //if this is their first visit
    visitDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    console.log(diff);
    if (diff < 1) {
        // If the amount of time between visits is less than a day
        visitDisplay.textContent = "Back so soon! Awesome!";
    } else {
        const dayString = diff === 1 ? "day" : "days";
        visitDisplay.textContent = `Your last visit was ${diff} ${dayString} ago.`;
    }
}

// Set lastVisit before using it
setLastVisit();

lastVisit = getLastVisit();

