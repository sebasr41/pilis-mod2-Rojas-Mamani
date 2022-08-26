/* form post y validation */
function onClick(event) {
  event.preventDefault();

  const mensaje = {
    comercio: document.getElementById("comercio").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      Swal.fire("Enviado", "Gracias por registrarse", "success");
      cleanForm();
      document.getElementById("enviar").disabled=true;
    })
    .catch((err) => {
      Swal.fire("Enviado", "ocurrio un error inesperado", "error");
    });
}
function cleanForm() {
  let formulario = document.getElementById("formulario");
  formulario.reset();
}
function redirectUrl() {
  window.location.href = "https://google.com";
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

const inputs = document.querySelectorAll(".form [required]");
inputs.forEach((input) => {
  const span = document.createElement("span");
  span.id = input.name;
  span.textContent = input.title;
  span.classList.add("error-form", "isHide");
  input.insertAdjacentElement("afterend", span);
});
document.addEventListener("keyup", (event) => {
  if (event.target.matches(".form [required]")) {
    let input = event.target;
    let pattern = input.pattern;
    if (pattern && input.value !== "") {
      let regex = new RegExp(pattern);
      return !regex.exec(input.value)
        ? (document.getElementById(input.name).nextElementSibling.classList.add("isActive"), document.getElementById("enviar").disabled=true)
        : (document.getElementById(input.name).nextElementSibling.classList.remove("isActive"), document.getElementById("enviar").disabled=false)
    }
  }
});
