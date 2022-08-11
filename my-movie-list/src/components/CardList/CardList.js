import Card from './Card/Card';
import styles from './CardList.module.css'

const CardList = ({ movies }) => {
    return(
        <ul className={styles.list}>
            {movies.map(m => <Card movie={m} key={m._id} />)}
        </ul>
    );
}

export default CardList;