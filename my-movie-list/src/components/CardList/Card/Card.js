import styles from './Card.module.css'

const Card = ({ movie }) => {
    return (
        <li className={styles.item}>
            <img className={styles.img} src={movie.img} alt="Movie poster" />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{movie.title}</h2>
            </div>
            <button className={styles.btn}>Details</button>
        </li>
    );
}

export default Card;