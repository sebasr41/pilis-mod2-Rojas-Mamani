const d = document;
const w = window;
const ls = localStorage;

// Menu hamburguer

const $btn = d.getElementById("menu");
const $menu = d.querySelector(".navbar-menu");

$btn.addEventListener("click", () => {
  $btn.classList.contains("fa-bars")
    ? $btn.classList.replace("fa-bars", "fa-xmark")
    : $btn.classList.replace("fa-xmark", "fa-bars");

  $menu.classList.toggle("isActive");
});

const hideMenu = (eventToListen) => {
  w.addEventListener(eventToListen, () => {
    $btn.classList.replace("fa-xmark", "fa-bars");
    $menu.classList.remove("isActive");
  });
};

hideMenu("scroll");
hideMenu("resize");

// Light/Dark theme

const $btnTheme = document.getElementById("icon-theme");

const darkMode = () => {
  d.body.classList.remove("is-light-mode");
  d.body.classList.add("is-dark-mode");
  $btnTheme.firstElementChild.classList.replace("fa-moon", "fa-sun");
  ls.setItem("theme", "dark");
};

const lightMode = () => {
  d.body.classList.remove("is-dark-mode");
  d.body.classList.add("is-light-mode");
  ls.setItem("theme", "light");
};

$btnTheme.addEventListener("click", () => {
  $btnTheme.firstElementChild.classList.contains("fa-moon")
    ? ($btnTheme.firstElementChild.classList.replace("fa-moon", "fa-sun"),
      darkMode())
    : ($btnTheme.firstElementChild.classList.replace("fa-sun", "fa-moon"),
      lightMode());
});

d.addEventListener("DOMContentLoaded", (e) => {
  if (ls.getItem("theme") === null) ls.setItem("theme", "light");
  if (ls.getItem("theme") === "light") lightMode();
  if (ls.getItem("theme") === "dark") darkMode();
});
