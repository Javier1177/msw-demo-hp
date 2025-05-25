import { useState } from 'react';
import styles from './auth.module.css';

export default function Auth({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      sessionStorage.setItem('user', JSON.stringify({ username }));
      onLogin();
    }
  };

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <input
          type='text'
          placeholder='Usuario'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <button type='submit' className={styles.button}>
          Entrar
        </button>
      </form>
    </main>
  );
}
