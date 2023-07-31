import { useState } from 'react';
import styles from './SearchSection.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieList from './MovieList/MovieList';
import { fetchMovies, fetchMoviesByActor } from '@/utils/api';
import { sortByDate } from '@/utils/sort';

const SearchSection = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [term, setTerm] = useState('');

    const [selectedCheckbox, setCheckbox] = useState('movie');

    const [error, setError] = useState('');

    const handleSubmit = async () => {
        if (selectedCheckbox === 'movie') {
            try {
                const res = await fetchMovies(term);
                if (res.length === 0) {
                    setError('Aucun résultat');
                    setMoviesData([]);
                } else {
                    sortByDate(res);
                    setMoviesData(res);
                    setError('');
                }
            } catch (error) {
                setError(error.message);
                setMoviesData([]);
            }
        } else if (selectedCheckbox === 'actor') {
            try {
                const res = await fetchMoviesByActor(term);
                if (res.length === 0) {
                    setError('Aucun résultat');
                    setMoviesData([]);
                } else {
                    setMoviesData(res);
                    setError('');
                }
            } catch (error) {
                setError(error.message);
                setMoviesData([]);
            }
        }
    };

    return (
        <div className={styles.container}>
            <SearchBar
                term={term}
                setTerm={setTerm}
                onSubmit={handleSubmit}
                selectedCheckbox={selectedCheckbox}
                setCheckbox={setCheckbox}
            />
            {!!error && <p>{error}</p>}
            <MovieList moviesData={moviesData} />
        </div>
    );
};

export default SearchSection;
