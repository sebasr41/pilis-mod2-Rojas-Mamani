const d = document;
const ls = localStorage;

const switchTheme = () => {
  const $btnTheme = d.getElementById("icon-theme");

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
};

export default switchTheme;
