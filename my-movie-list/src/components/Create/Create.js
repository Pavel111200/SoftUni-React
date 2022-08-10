import styles from './Create.module.css'

const Create = () => {
    return (
        <form className={styles.form}>
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