import { useEffect, useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { deleteMovie, getOne } from '../../services/movieService';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const {user} = useUserContext();
    const navigate = useNavigate();

    const DeleteHandler = () => {
        deleteMovie(movieId,user.accessToken)
        .then(()=> navigate('/catalog'))
    }

    useEffect(() => {
        try {
            getOne(movieId)
            .then(result => setMovie(result));
        } catch (error) {
            console.log(error);
        }
    },[movieId]);

    return (
        <section className={styles.section}>
            <img
                className={styles.img}
                src={movie.img}
                alt="Movie poster"
            />
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{movie.title}</h2>
                <p className={styles.desc}>
                    {movie.description}
                </p>
                {movie.rating ? <p className={styles.info}>Rating: {movie.rating}</p> : <p className={styles.info}>No rating!</p>}
                {movie.genre ? <p className={styles.info}>Genre: {movie.genre}</p> : <p className={styles.info}>No genre!</p>}
                {movie.runtime ? <p className={styles.info}>Runtime: {movie.runtime}</p> : <p className={styles.info}>No runtime!</p>}
                <div className={styles.buttonWrapper}>
                    {user._id === movie._ownerId && 
                    <>
                    <Link to={`/catalog/${movieId}/edit`} className={styles.btn}>
                        Edit
                    </Link>
                    <button onClick={DeleteHandler} className={`${styles.btn} ${styles.danger}`}>
                        Delete
                    </button>
                    </>
                    }
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;