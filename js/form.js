function onClick (event) {
    event.preventDefault();

    const mensaje = {
      comercio: document.getElementById('comercio').value,
      email: document.getElementById('email').value,
    }
 
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por registrarse',
              'success'
          );
          cleanForm();
      })
      .catch((err) => console.log(err));
  
  }
  function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
function redirectUrl(){
    window.location.href = "https://google.com";    
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

  