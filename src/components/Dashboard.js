export function Dashboard() {
  setTimeout(() => {
    const userData = JSON.parse(sessionStorage.getItem("usuario"));

    if (!userData || userData.rol !== "admin") {
      document.getElementById("app").innerHTML = `
        <div class="error">
          <h2>Acceso denegado</h2>
          <p>No tienes permisos para ver esta sección.</p>
        </div>
      `;
      return;
    }

    // Fetch de usuarios si es admin
    fetch("http://localhost:3000/api/usuarios")
      .then((res) => res.json())
      .then((usuarios) => {
        const listaUsuarios = usuarios
          .map(
            (u) => `
              <tr>
                <td>${u.id}</td>
                <td>${u.nombre}</td>
                <td>${u.correo}</td>
                <td>${u.rol}</td>
                <td>
                  <button class="btn-view" data-id="${u.id}">Ver</button>
                  <button class="btn-edit" data-id="${u.id}">Editar</button>
                  <button class="btn-delete" data-id="${u.id}">Eliminar</button>
                </td>
              </tr>
            `
          )
          .join("");

        // Insertamos solo el <tbody>, no toda la tabla de nuevo
        document.getElementById("tabla-usuarios").innerHTML = listaUsuarios;

        // Aquí puedes agregar eventos a los botones si deseas (opcional)
      })
      .catch((err) => {
        document.getElementById("tabla-usuarios").innerHTML = `
          <tr><td colspan="5">Error al cargar los usuarios.</td></tr>
        `;
        console.error(err);
      });
  }, 0);

  // Solo dejamos la estructura base de la tabla aquí
  return `
    <section class="dashboard-container">
      <h2>Panel de Administración</h2>
      <table class="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="tabla-usuarios">
          <!-- Aquí se cargan los usuarios dinámicamente -->
        </tbody>
      </table>
    </section>
  `;
}
