// Inicializar EmailJS con tu clave pública
emailjs.init("fPuXl6OQ2T13VzgYh"); // Reemplaza "YOUR_PUBLIC_KEY" con tu clave pública

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío por defecto

  // Obtener los valores del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Enviar el correo mediante EmailJS
  emailjs
    .send("service_tjcc5o2", "template_6o3mp6d", {
      name: name,
      email: email,
      message: message,
    })
    .then(
      function () {
        // Mostrar mensaje de éxito
        document.getElementById("success").innerHTML =
          "<div class='alert alert-success'>¡Tu mensaje ha sido enviado correctamente!</div>";
        document.getElementById("contactForm").reset();
      },
      function (error) {
        // Mostrar mensaje de error
        document.getElementById("success").innerHTML =
          "<div class='alert alert-danger'>Hubo un error al enviar tu mensaje. Por favor, inténtalo más tarde.</div>";
        console.error("Error al enviar el mensaje:", error);
      }
    );
});
