export function Registro() {
  setTimeout(() => {
    const form = document.getElementById("registro-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const password = document.getElementById("password").value;
      const rol = document.getElementById("rol").value;

      try {
        const response = await fetch("http://localhost:3000/api/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, correo, password, rol }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("✅ Usuario registrado correctamente");
          window.location.hash = "#/login"; // o redirige según tu app
        } else {
          alert("❌ Error: " + data.mensaje);
        }
      } catch (error) {
        console.error("Error al registrar usuario:", error);
        alert("❌ Error al conectar con el servidor");
      }
    });
  }, 0);

  return `
    <div class="registro-container">
      <h2>Registro de Usuario</h2>
      <form id="registro-form">
        <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" required />
        <input type="email" id="correo" name="correo" placeholder="Correo electrónico" required />
        <input type="password" id="password" name="password" placeholder="Contraseña" required />

        <!-- Campo de selección de rol -->
        <select id="rol" name="rol" required>
          <option value="">Selecciona un rol</option>
          <option value="usuario">Usuario</option>
          <option value="admin">Administrador</option>
        </select>

        <button type="submit">Registrar</button>
      </form>
    </div>
  `;
}

