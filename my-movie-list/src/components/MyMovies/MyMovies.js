import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { getAll } from '../../services/movieService';
import CardList from '../CardList/CardList';
import styles from './MyMovies.module.css';

const MyMovies = () => {
    const [movies, setMovies] = useState([]);
    const { user } = useUserContext();

    useEffect(() => {
        try {
            getAll()
        .then(result => {
            setMovies(result.filter(m => m._ownerId === user._id));
        })
        } catch (error) {
            <Navigate to='/404' replace />
        }
        
    },[user._id]);

    return (
        <>
            <h1 className={styles.title}>My Movies</h1>
            {movies.length === 0 
            ? <>
                <img className={styles.img} src='https://gogeticon.net/files/3107478/9843fd586d4f6dffd86fe313b54296f4.png' alt='Sad png'/>
                <h2 className={styles.subTitle}>You haven't added any movies yet. </h2>
                <Link to='/create' className={styles.link}>Clink here to add one.</Link>
              </>
            : <CardList movies={movies} />}
        </>
    );
}

export default MyMovies;