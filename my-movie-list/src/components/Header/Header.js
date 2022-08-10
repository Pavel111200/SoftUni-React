import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav>
            <ul type="none" className={styles.list}>
                <li className={styles.listItem}>
                    <Link to="/"className={styles.link}>Home</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to="/login" className={styles.link}>Login</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to="register" className={styles.link}>Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;