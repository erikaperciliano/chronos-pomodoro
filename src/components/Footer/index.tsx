import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Understand how the Pomodoro Technique works🍎
      </RouterLink>
      <RouterLink href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Made with 💚
      </RouterLink>
    </footer>
  );
}
