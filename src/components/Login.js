export function Login() {
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
