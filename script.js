const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const span = document.querySelector("span");

btn.addEventListener("click", (e) => {
  //  e.stopPropagation();
  container.style.display = "block";
  //container.classList.toggle("popup");
});
span.addEventListener("click", () => {
  container.style.display = "none";
  //container.classList.toggle("out");
});
