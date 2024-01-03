const url = "https://raw.githubusercontent.com/taylynnharman/wdd230/main/chamber/data/members.json"
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members)
  }

  getMemberData();

  const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3'); 
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');
    
        // Build the h2 content out to show the member's full name
        name.textContent = `${member.name}`; 
        address.textContent = `${member.address}`; 
        phone.textContent = `${member.phone}`; 
        website.href = member.website; 
        website.textContent = `${member.website}`;
        website.target = '_blank'; 
        membership.textContent = `${member.membership}`; 
        name.textContent = `${member.name}`; 

        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', `${member.image}`);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', 'auto');

        card.appendChild(name); 
        card.appendChild(logo); 
        card.appendChild(address); 
        card.appendChild(phone); 
        card.appendChild(website); 
        card.appendChild(membership); 
        cards.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const gridModeToggle = document.getElementById("gridMode");

    gridModeToggle.addEventListener("change", function () {
        if (this.checked) {
            enableList();
        } else {
            enableGrid();
        }
    });

    // Add grid, remove list
    function enableGrid() {
        cards.classList.add("grid"); // Add a class for grid view
        cards.classList.remove("list"); // Remove the class for list view
    }

    // Add list function, remove grid
    function enableList() {
        cards.classList.add("list"); // Add a class for list view
        cards.classList.remove("grid"); // Remove the class for grid view
    }
});