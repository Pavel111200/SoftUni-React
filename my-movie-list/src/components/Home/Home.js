import CardList from "../CardList/CardList";
import styles from './Home.module.css';
import { useEffect,useState } from "react";
import { getAll } from "../../services/movieService";


const Home = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getAll()
        .then(result => {
            console.log(result);
            setMovies(result);
        })
    },[]);

    return (
        <>
            <h1 className={styles.title}>Welcome to My Movie List!</h1>
            <h2 className={styles.subTitle}>Top 3 movies</h2>
            {movies.length === 0 ? <h2>Loading...</h2> :<CardList movies={movies} /> }
        </>
    );
}

export default Home;