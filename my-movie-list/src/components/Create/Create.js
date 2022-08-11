import { create } from '../../services/movieService';
import styles from './Create.module.css'
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            img,
            title,
            genre,
            runtime,
            rating,
            desc
        } = Object.fromEntries(new FormData(e.target));

        create({ img, title, genre, runtime, rating, desc }, user.accessToken)
            .then(() => {
                navigate('/');
            });
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <img
                className={styles.img}
                src="https://thumbs.dreamstime.com/b/movie-illustration-logo-vector-design-film-178252125.jpg"
                alt="Movie logo"
            />
            <h2 className={styles.title}>Create Movie</h2>
            <div className={styles.wrapper}>
                <label htmlFor="title" className={styles.label}>
                    Title:
                </label>
                <input type="text" name="title" className={styles.input} />
                <label htmlFor="genre" className={styles.label}>
                    Genre:
                </label>
                <input type="text" name="genre" className={styles.input} />
                <label htmlFor="runtime" className={styles.label}>
                    Runtime:
                </label>
                <input type="text" name="runtime" className={styles.input} />
                <label htmlFor="img" className={styles.label}>
                    Image Url:
                </label>
                <input type="text" name="imgUrl" className={styles.input} />
                <label htmlFor="rating" className={styles.label}>
                    Rating:
                </label>
                <input type="number" max={10} min={1} className={styles.input} />
                <label htmlFor="desc" className={styles.label}>
                    Description:
                </label>
                <textarea
                    name="desc"
                    cols={30}
                    rows={10}
                    className={styles.input}
                />
            </div>
            <button type="submit" className={styles.btn}>
                Create
            </button>
        </form>
    );
}

export default Create;