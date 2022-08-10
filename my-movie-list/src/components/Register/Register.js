import styles from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className={styles.formWrapper}>
            <form action="">
                <img className={styles.formImg} src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user-logo" />
                <h2 className={styles.formTitle}>Register Here</h2>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="Username" class={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-user icon"}></i>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="email" name="email" placeholder="Email" class={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-envelope"}></i>
                </div>
                <div className={styles.inputWrapper}>
                    <input type="password" name="password" placeholder="Password" class={styles.formInput} />
                    <i className={styles.icon + " fa-solid fa-lock icon"}></i>
                </div>

                <button type="submit" className={styles.formBtn}>Register</button>

                <Link to="/login" className={styles.link}>Already have an account?</Link>
            </form>
        </div>
    );
}

export default Register;