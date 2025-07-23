export function Registro() {
  setTimeout(() => {
    const form = document.getElementById("registro-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const rol = document.getElementById("rol").value;

      try {
        const response = await fetch("http://localhost:3000/api/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, correo, rol }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Usuario registrado correctamente");
          // Redireccionar o limpiar formulario
        } else {
          alert("Error: " + data.mensaje);
        }
      } catch (error) {
        console.error("Error al registrar usuario:", error);
        alert("Error al conectar con el servidor");
      }
    });
  }, 0);

  return `
    <div class="registro-container">
      <h2>Registro de Usuario</h2>
      <form id="registro-form">
        <input type="text" name="nombre" placeholder="Nombre completo" required />
        <input type="email" name="correo" placeholder="Correo electrónico" required />
        <input type="password" name="password" placeholder="Contraseña" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  `;
}
