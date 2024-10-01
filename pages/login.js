// pages/login.js
import LoginForm from '../components/Auth/LoginForm';
import styles from '../styles/LoginForm.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
