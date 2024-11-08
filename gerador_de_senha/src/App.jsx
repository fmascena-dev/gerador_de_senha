import { useState } from 'react';
import './App.scss';
import Footer from './Components/Footer';

export default function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const geradorDeSenha = () => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    setShowPassword(true);
  };

  return (
    <>
      <main>
        <section className="principal">
          <h1>Gerador de Senha</h1>
          <button onClick={geradorDeSenha}>Gerar Senha</button>
          {showPassword && (
            <div className="resultado">
              <p>Senha gerada: </p>
              <p>{password}</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
