import form from "./form.js";
import swtichTheme from "./swtichTheme.js";
import toggleMenu from "./toggleMenu.js";
import weatherApi from "./weather.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  toggleMenu();
  weatherApi();
  form();
});

swtichTheme();
