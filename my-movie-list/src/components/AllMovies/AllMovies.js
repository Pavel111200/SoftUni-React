import { useEffect, useState } from "react";
import { getAll } from "../../services/movieService";
import CardList from "../CardList/CardList";
import styles from './AllMovies.module.css';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAll()
        .then(result => {
            setMovies(result);
        })
    },[]);

    return (
        <>
            <h1 className={styles.title}>All Movies</h1>
            {movies.length === 0 ? <h2>Loading...</h2> : <CardList movies={movies} />}
        </>
    );
}

export default AllMovies;