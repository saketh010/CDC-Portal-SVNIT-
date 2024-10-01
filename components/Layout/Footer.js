// components/Layout/Footer.js
import styles from '../../styles/Layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} CDC Portal. All rights reserved.</p>
    </footer>
  );
}
