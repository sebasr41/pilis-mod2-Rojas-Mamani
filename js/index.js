const d = document;
const w = window;
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
