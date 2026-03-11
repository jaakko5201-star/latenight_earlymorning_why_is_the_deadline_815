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