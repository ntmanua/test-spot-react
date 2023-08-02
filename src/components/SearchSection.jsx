import { useState, useEffect } from 'react';
import styles from './SearchSection.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieList from './MovieList/MovieList';
import { fetchMovies, fetchMoviesByActor } from '@/utils/api';
import { sortMovies } from '@/utils/sort';

const SearchSection = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [term, setTerm] = useState('');

    const [selectedCheckbox, setCheckbox] = useState('movie');
    const [selectedOption, setOption] = useState('option');

    const [error, setError] = useState('');
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const handleChange = async (event) => {
        const newTerm = event ? event.target.value : term;
        setTerm(newTerm);

        if (selectedCheckbox === 'movie') {
            try {
                const res = await fetchMovies(term);
                if (res.length === 0) {
                    if (isFirstLoad) {
                        setIsFirstLoad(false);
                    } else {
                        setError('Aucun résultat');
                        setMoviesData([]);
                    }
                } else {
                    sortMovies(res, selectedOption);
                    setMoviesData(res);
                    setError('');
                }
            } catch (error) {
                console.log(error.message);
                setError('Aucun résultat');
                setMoviesData([]);
            }
        } else if (selectedCheckbox === 'actor') {
            try {
                const res = await fetchMoviesByActor(term);
                if (res.length === 0) {
                    if (isFirstLoad) {
                        setIsFirstLoad(false);
                    } else {
                        setError('Aucun résultat');
                        setMoviesData([]);
                    }
                } else {
                    sortMovies(res, selectedOption);
                    setMoviesData(res);
                    setError('');
                }
            } catch (error) {
                console.log(error.message);
                setError('Aucun résultat');
                setMoviesData([]);
            }
        }
    };

    useEffect(() => {
        handleChange();
    }, [term, selectedOption, selectedCheckbox]);

    return (
        <div className={styles.container}>
            <SearchBar
                term={term}
                handleChange={handleChange}
                selectedCheckbox={selectedCheckbox}
                setCheckbox={setCheckbox}
                selectedOption={selectedOption}
                setOption={setOption}
            />
            {!!error && <p>{error}</p>}
            <MovieList moviesData={moviesData} />
        </div>
    );
};

export default SearchSection;
