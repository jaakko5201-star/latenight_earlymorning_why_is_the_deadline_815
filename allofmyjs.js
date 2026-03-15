// Burger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
    });
  }
});
// js/news.js

// Select all expand buttons
const expandButtons = document.querySelectorAll(".expand-news");

// Loop through each button
expandButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Find the sibling element with class 'events'
    const events = button.nextElementSibling;

    if (events) {
      // Toggle visibility
      events.classList.toggle("hidden");

      // Toggle button text between '+' and '−'
      button.textContent = events.classList.contains("hidden") ? "+" : "−";
    }
  });
});