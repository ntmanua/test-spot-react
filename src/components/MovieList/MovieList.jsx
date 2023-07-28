import styles from './MovieList.module.css';

const MovieList = ({ moviesData }) => {
    const showMovies = moviesData.map((movie) => {
        return (
            <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
        );
    });
    return <div>{showMovies}</div>;
};

export default MovieList;
