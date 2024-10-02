// components/Auth/LoginForm.js
import { useState } from 'react';
import styles from '../../styles/LoginForm.module.css';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        router.push('/home');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('An unexpected error occurred:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Login</h2> {/* Use the title class here */}
      <div className={styles.inputGroup}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Enter your username"
          className={styles.input} // Add styling class for input
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className={styles.input} // Add styling class for input
        />
      </div>
      <button type="submit" className={styles.button}>Login</button>
      {error && <p className={styles.error}>{error}</p>} {/* Apply error styling */}
    </form>
  );
}
