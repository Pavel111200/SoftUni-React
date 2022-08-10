import Card from './Card/Card';
import styles from './CardList.module.css'

const CardList = () =>{
    return(
        <ul className={styles.list}>
            <Card />
            <Card />
            <Card />
        </ul>
    );
}

export default CardList;