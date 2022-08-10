import styles from './Card.module.css'

const Card = () => {
    return (
        <li className={styles.item}>
            <img className={styles.img} src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_240x360_crop_center.progressive.jpg?v=1631200474" alt="Movie poster" />
            <h2 className={styles.title}>Avengers End Game!</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima, facilis culpa libero, possimus in
            </p>
            <button className={styles.btn}>Details</button>
            <p><i className="fa-solid fa-star"></i> 10</p>
        </li>
    );
}

export default Card;