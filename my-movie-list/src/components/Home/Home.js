import CardList from "../CardList/CardList";
import styles from './Home.module.css';


const Home = () => {
    return (
        <>
            <h1 className={styles.title}>Welcome to My Movie List!</h1>
            <CardList />
        </>
    );
}

export default Home;