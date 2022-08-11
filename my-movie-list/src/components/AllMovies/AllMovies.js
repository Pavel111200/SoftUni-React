import { useEffect, useState } from "react";
import { getAll } from "../../services/movieService";
import CardList from "../CardList/CardList";


const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            getAll()
                .then(result => setMovies(result));
        } catch (error) {
            return (
                <>
                    <h1>All Movies</h1>
                    <h2>No movies yet!</h2>
                </>
            );
        }
    },[]);

    return (
        <>
            <h1>All Movies</h1>
            {movies.length === 0 ? <h2>Loading...</h2> : <CardList movies={movies} />}
        </>
    );
}

export default AllMovies;