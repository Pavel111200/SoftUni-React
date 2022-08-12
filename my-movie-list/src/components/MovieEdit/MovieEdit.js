import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { editMovie, getOne } from "../../services/movieService";
import styles from './MovieEdit.module.css';


const MovieEdit = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const {user} = useUserContext();
    const navitage = useNavigate();

    useEffect(() => {
        try {
            getOne(movieId)
            .then(result => setMovie(result));
        } catch (error) {
            console.log(error);
        }
    },[movieId]);

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            editMovie(movie,user.accessToken)
        .then(()=> navitage(`/catalog/${movieId}`));
        } catch (error) {
            <Navigate to='/404' replace />
        }

        
    }

    const onChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://thumbs.dreamstime.com/b/movie-illustration-logo-vector-design-film-178252125.jpg"
                alt="Movie logo"
            />
            <h2 className={styles.title}>Edit Movie</h2>
            <div className={styles.wrapper}>
                <label htmlFor="title" className={styles.label}>
                    Title:
                </label>
                <input 
                    type="text" 
                    name="title" 
                    className={styles.input} 
                    value={movie.title} 
                    onChange={onChange}
                    />
                <label htmlFor="genre" className={styles.label}>
                    Genre:
                </label>
                <input 
                    type="text" 
                    name="genre" 
                    className={styles.input}  
                    value={movie.genre ? movie.genre : ''} 
                    onChange={onChange}
                />
                <label htmlFor="runtime" className={styles.label}>
                    Runtime:
                </label>
                <input 
                    type="text" 
                    name="runtime" 
                    className={styles.input} 
                    value={movie.runtime ? movie.runtime : ''} 
                    onChange={onChange}
                />
                <label htmlFor="img" className={styles.label}>
                    Image Url:
                </label>
                <input type="text" name="img" className={styles.input} value={movie.img} onChange={onChange}/>
                <label htmlFor="rating" className={styles.label}>
                    Rating:
                </label>
                <input 
                type="number"
                    max={10} 
                    min={1} 
                    className={styles.input} 
                    name="rating" 
                    value={movie.rating ? movie.rating : ''}
                    onChange={onChange}
                />
                <label htmlFor="description" className={styles.label}>
                    Description:
                </label>
                <textarea
                    name="description"
                    cols={30}
                    rows={10}
                    className={styles.input}
                    value={movie.description}
                    onChange={onChange}
                />
            </div>
            <button type="submit" className={styles.btn}>
                Edit
            </button>
        </form>
    );
}

export default MovieEdit;