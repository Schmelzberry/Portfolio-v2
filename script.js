function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // these lines are switching the "open" flag in classList which is built in JS
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}