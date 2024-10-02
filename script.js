// Select the popup container, button, and close icon (span)
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const span = document.querySelector("span");

// Add click event listener to the button
btn.addEventListener("click", (e) => {
  // e.stopPropagation(); // Uncomment to prevent event bubbling (optional)
  container.style.display = "block"; // Show the popup by changing display to block
  // container.classList.toggle("popup"); // Uncomment for scaling effect (optional)
});

// Add click event listener to the close icon (span)
span.addEventListener("click", () => {
  container.style.display = "none"; // Hide the popup by changing display to none
  // container.classList.toggle("out"); // Uncomment for scaling effect when closing (optional)
});
