const form = () => {
  const modalMessage = document.getElementById("modal-message");
  const closeModal = document.getElementById("close-modal");
  const modalLoader = document.getElementById("modal-loader");
  const modalText = document.querySelector(".modal-text");

  async function onClick(event) {
    event.preventDefault();

    const mensaje = {
      comercio: document.getElementById("comercio").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
    };

    try {
      if (
        mensaje.comercio === "" ||
        mensaje.email === "" ||
        mensaje.telefono === ""
      )
        throw { msg: "Error. Debe ingresar todos los campos ❌" };

      let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      let json = await res.json();

      modalText.textContent = "Gracias por registrarse ✅";

      modalLoader.showModal();

      setTimeout(() => {
        modalLoader.close();

        modalMessage.showModal();

        closeModal.addEventListener("click", () => modalMessage.close());

        cleanForm();
      }, 1500);
    } catch (error) {
      modalText.textContent = error.msg;

      modalMessage.showModal();

      closeModal.addEventListener("click", () => modalMessage.close());
    }
  }

  function cleanForm() {
    let formulario = document.getElementById("formulario");
    formulario.reset();
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
          ? document
              .getElementById(input.name)
              .nextElementSibling.classList.add("isActive")
          : document
              .getElementById(input.name)
              .nextElementSibling.classList.remove("isActive");
      }
    }
  });
};

export default form;
