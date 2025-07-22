import { Header } from '../components/Header.js';
import { Login } from '../components/Login.js';

export function Home() {
  return `
    ${Header()}
    <main>
      ${Login()}
    </main>
  `;
}
