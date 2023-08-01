import { useEffect, useState } from 'react';
import styles from './SearchSection.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieList from './MovieList/MovieList';
import { fetchMovies, fetchMoviesByActor } from '@/utils/api';
import { sortByDate, sortByRating } from '@/utils/sort';

const SearchSection = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [term, setTerm] = useState('');

    const [selectedCheckbox, setCheckbox] = useState('movie');
    const [selectedOption, setOption] = useState('option');

    const [error, setError] = useState('');

    const handleChange = async (event) => {
        setTerm(event.target.value);
        setOption(event.target.value);

        if (selectedCheckbox === 'movie') {
            try {
                const res = await fetchMovies(term);
                if (res.length === 0) {
                    setError('Aucun résultat');
                    setMoviesData([]);
                } else {
                    if (selectedOption === 'option1') {
                        sortByDate(res);
                    } else if (selectedOption === 'option2') {
                        sortByRating(res);
                    }
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
                    if (selectedOption === 'option1') {
                        sortByDate(res);
                    } else if (selectedOption === 'option2') {
                        sortByRating(res);
                    }
                    setMoviesData(res);
                    setError('');
                }
            } catch (error) {
                setError(error.message);
                setMoviesData([]);
            }
        }
    };
    useEffect(() => {
        handleChange;
    }, [selectedOption]);
    return (
        <div className={styles.container}>
            <SearchBar
                term={term}
                handleChange={handleChange}
                selectedCheckbox={selectedCheckbox}
                setCheckbox={setCheckbox}
                selectedOption={selectedOption}
            />
            {!!error && <p>{error}</p>}
            <MovieList moviesData={moviesData} />
        </div>
    );
};

export default SearchSection;
