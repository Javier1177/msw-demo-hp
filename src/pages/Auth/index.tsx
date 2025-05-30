import { useState } from 'react';
import styles from './auth.module.css';
import { usePostUserAuth } from '../../api/hooks/auth/usePostUserAuth';

export default function Auth({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = usePostUserAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      const response = await login({ username, password });
      console.log(response);
      if (response) {
        sessionStorage.setItem('user', JSON.stringify({ username }));
        onLogin();
      }
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
        {error && <p className={styles.error}>{error}</p>}
        <button type='submit' className={styles.button} disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </main>
  );
}
