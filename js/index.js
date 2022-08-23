const d = document;
const $btn = d.getElementById("menu");
const $menu = d.querySelector(".navbar-menu");

$btn.addEventListener("click", () => {
  $btn.classList.toggle("fa-xmark");
  $menu.classList.toggle("isActive");
});
