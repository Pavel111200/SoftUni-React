import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.formWrapper}>
            <form action="">
                <img className={styles.formImg} src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user-logo" />
                <h2 className={styles.formTitle}>Login Here</h2>
                <div className={styles.inputWrapper}>
                    <input type="email" name="email" placeholder="Email" class={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-envelope"}></i>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="password" name="password" placeholder="Password" class={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-lock icon"}></i>
                </div>

                <button type="submit" className={styles.formBtn}>Login</button>

                <Link to="/register" className={styles.link}>Don't have an account? Click here.</Link>
            </form>
        </div>
    );
}

export default Login;