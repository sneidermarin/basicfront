export function Login() {
  setTimeout(() => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const correo = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;

      try {
        const response = await fetch("http://localhost:3000/api/usuarios/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ correo, password }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Inicio de sesión exitoso");

          // Guardar en sessionStorage si quieres
          sessionStorage.setItem("usuario", JSON.stringify(data));

          // Redirigir según el rol
          if (data.rol === "admin") {
            window.location.hash = "#/dashboard";
          } else {
            window.location.hash = "#/inicio"; // Puedes crear una vista para usuarios normales
          }
        } else {
          alert("Error: " + data.mensaje);
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        alert("No se pudo conectar con el servidor");
      }
    });
  }, 0);

  return `
    <div class="login-container">
      <h1>Bienvenidos</h1>
      <h2>Iniciar sesión</h2>
      <form id="login-form">
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
      <p>¿No tienes cuenta? <a href="#/registro">Regístrate aquí</a></p>
    </div>
  `;
}

