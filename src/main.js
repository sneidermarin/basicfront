import './style.css';
import { Home } from './pages/Home.js';
import { Login } from './components/Login.js';
import { Registro } from './components/Registro.js';
import { Dashboard } from './components/Dashboard.js';

function loadPage() {
  const app = document.getElementById('app');
  const route = window.location.hash;

  if (route === '#/registro') {
    app.innerHTML = Registro();

    setTimeout(() => {
      const form = document.getElementById('registro-form');
      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();

          const nombre = form.nombre?.value.trim();
          const correo = form.correo?.value.trim();
          const password = form.password?.value.trim();
          const rol = form.rol?.value || 'usuario';

          if (!nombre || !correo || !password) {
            alert('Por favor completa todos los campos.');
            return;
          }

          const data = { nombre, correo, password, rol };

          try {
            const response = await fetch('http://localhost:3000/api/usuarios', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });

            if (response.ok) {
              alert('✅ Usuario registrado exitosamente');
              window.location.hash = '#/login';
            } else {
              const error = await response.json();
              console.error('Error desde el servidor:', error);
              alert('❌ Error al registrar el usuario');
            }
          } catch (error) {
            console.error('Error al conectar con el backend:', error);
            alert('❌ No se pudo conectar al servidor');
          }
        });
      }
    }, 100);

  } else if (route === '#/login') {
    app.innerHTML = Login();

  } else if (route === '#/dashboard') {
    app.innerHTML = Dashboard();

  } else {
    app.innerHTML = Home();
  }
}

// Escuchar cambios en la URL (hash) y cargar la vista correspondiente
window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);


