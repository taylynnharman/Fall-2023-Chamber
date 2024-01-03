const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
let isNavMoved = false; // Track the current state

function moveNavElement() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');


    if (header && nav) {
        if (isNavMoved) {
            // If the navigation is already moved, move it back to the header
            header.appendChild(nav);
        } else {
            // If the navigation is in the header, move it to a new location
            const wrapper = document.querySelector('.wrapper');
            if (wrapper) {
                header.parentNode.insertBefore(nav, wrapper);
            } else {
                // If there is no wrapper, fallback to moving it before main
                const main = document.querySelector('main');
                if (main) {
                    header.parentNode.insertBefore(nav, main);
                }
            }
        }

        isNavMoved = !isNavMoved; // Toggle the state
    }
}

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    moveNavElement();
});

