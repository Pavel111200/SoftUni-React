import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
    return (
        <li className={styles.item}>
            <img className={styles.img} src={movie.img} alt="Movie poster" />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{movie.title}</h2>
            </div>
            <Link to={`/catalog/${movie._id}`} className={styles.btn}>Details</Link>
        </li>
    );
}

export default Card;