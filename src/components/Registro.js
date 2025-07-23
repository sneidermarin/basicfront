export function Registro() {
  return `
    <div class="registro-container">
      <h2>Registro de Usuario</h2>
      <form id="registro-form">
        <input type="text" name="nombre" placeholder="Nombre completo" required />
        <input type="email" name="correo" placeholder="Correo electrónico" required />
        <input type="password" name="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  `;
}
