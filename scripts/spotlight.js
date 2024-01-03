//Pull Data from github
const url = "https://raw.githubusercontent.com/taylynnharman/wdd230/main/chamber/data/members.json"
const memberCards = document.getElementById('memberCards');


    async function getMemberData() {
            const response = await fetch(url);
            const data = await response.json();
            displaySpotlight(data.members);
    }

    //filter out gold members
    function filterMembers(members) {
        return members.filter(member => member.membership === "Gold");
    }

    function pickRandomMembers(members, count) {
        const randomMembers = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * members.length);
            randomMembers.push(members.splice(randomIndex, 1)[0]);
        }
        return randomMembers;
    }

    function createMemberCard(member) {
        let div = document.createElement('div');
        div.classList.add('mySlides', 'fade');


        let image = document.createElement('img');
        image.src = member.spotlight;
        image.alt = `${member.name} Spotlight`;
        image.loading = 'lazy';
        image.width = '300';
        image.height = '300';

        // div.appendChild(numberDiv);
        div.appendChild(image);

        return div;
    }


    function createSpotlights() {
            let container = document.createElement('div');
            const randomGoldMembers = pickRandomMembers(goldMembers, 3);
            randomGoldMembers.forEach(member => {
                const memberCard = createMemberCard(member);
                container.appendChild(memberCard);
            });
            return container;
        }

        function displaySpotlight(members) {
            goldMembers = filterMembers(members);
            
            // Create spotlights and append them to memberCards
            const spotlights = createSpotlights();
            memberCards.appendChild(spotlights);
        
            // Call showSlides after creating spotlights
            showSlides(slideIndex);
        }

    // Call the function to fetch and display data
    getMemberData();
    
    // Slideshow
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }