// components/Layout/Header.js
import Link from 'next/link';
import styles from '../../styles/Layout.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Replace with your logo image if available */}
          CDC Portal
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/login">
              Login
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}
