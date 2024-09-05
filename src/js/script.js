//MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => link.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

toggleSwitch.addEventListener("change", e => {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  toggleSwitch.checked = savedTheme === "dark";
}

//Formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío real del formulario

  document.getElementById('responseMessage').style.display = 'block';

  document.getElementById('contactForm').reset();
});
