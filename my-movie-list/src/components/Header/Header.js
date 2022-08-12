import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';


const Header = () => {
    const { user, isAuthenticated } = useUserContext();

    return (
        <nav>
            <ul type="none" className={styles.list}>
                {isAuthenticated ? 
                <li className={styles.listItem}>
                    Welcome, {user.username ? user.username : user.email}
                </li> : 
                <li className={styles.listItem}>
                    Welcome, guest
                </li>}
                <li className={styles.listItem}>
                    <Link to="/" className={styles.link}>Home</Link>
                </li>
                <li className={styles.listItem}>
                    <Link to="/catalog" className={styles.link}>All Movies</Link>
                </li>
                {isAuthenticated ||
                    <>
                        <li className={styles.listItem}>
                            <Link to="/login" className={styles.link}>Login</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to="/register" className={styles.link}>Register</Link>
                        </li>
                    </>
                }
                {isAuthenticated &&
                    <>
                        <li className={styles.listItem}>
                            <Link to="/mymovies" className={styles.link}>My Movie</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to="/create" className={styles.link}>Create Movie</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to="/logout" className={styles.link}>Logout</Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default Header;