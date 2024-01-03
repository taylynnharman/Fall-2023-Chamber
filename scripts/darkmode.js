document.addEventListener("DOMContentLoaded", function() {
const darkModeToggle = document.getElementById("mode");
const footer = document.querySelector("footer");
const h3Elements = document.querySelectorAll("h3");
const h2Elements = document.querySelectorAll("h2");
const h1Elements = document.querySelectorAll("h1");
const labelElements = document.querySelectorAll("label");
const membershipLevelElements = document.querySelectorAll('.membership-level');

darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  // Add CSS classes or styles for dark mode
  document.body.classList.add("dark-mode");
  footer.classList.add("dark-mode");
  // Loop through each <h2> element and add the "dark-mode" class
h3Elements.forEach(function(h3) {
  h3.classList.add("dark-mode");
});
// Loop through each <h2> element and add the "dark-mode" class
h2Elements.forEach(function(h2) {
  h2.classList.add("dark-mode");
});
// Loop through each <h2> element and add the "dark-mode" class
h1Elements.forEach(function(h1) {
  h1.classList.add("dark-mode");
});
// Loop through each <h2> element and add the "dark-mode" class
labelElements.forEach(function(label) {
  label.classList.add("dark-mode");
});
// Loop through each <membershipLevel> element and add the "dark-mode" class
membershipLevelElements.forEach(function(membershipLevel) {
  membershipLevel.style.border = '2px solid var(--text-color)';
});

}

function disableDarkMode() {
  // Remove CSS classes or styles for dark mode
  document.body.classList.remove("dark-mode");
  footer.classList.remove("dark-mode");
  h3Elements.forEach(function(h3) {
    h3.classList.remove("dark-mode");
  });
  h2Elements.forEach(function(h2) {
    h2.classList.remove("dark-mode");
  });
  h1Elements.forEach(function(h1) {
    h1.classList.remove("dark-mode");
  });
  labelElements.forEach(function(label) {
    label.classList.remove("dark-mode");
  });
  membershipLevelElements.forEach(function(membershipLevel) {
    membershipLevel.style.border = '2px solid var(--primary-color)';
  });
}
})