import styles from './MovieList.module.css';

const MovieList = ({ moviesData }) => {
    const showMovies = moviesData.map((movie) => {
        return (
            <div className={styles.movieSheet}>
                <img
                    className={styles.poster}
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
            </div>
        );
    });
    return <div className={styles.container}>{showMovies}</div>;
};

export default MovieList;
