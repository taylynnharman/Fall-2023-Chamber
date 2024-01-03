const closeButton = document.querySelector('#closeBanner');
const banner = document.querySelector('#banner');
const today = new Date().getDay();
    
    if (today >= 1 && today <= 3) {
        // Show the banner
        banner.style.display = "block";
    } else {
        // Hide the banner on other days
        banner.style.display = "none";
    }
    closeButton.addEventListener('click', () => {
        banner.style.display = "none";
    });

