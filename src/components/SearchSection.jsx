import { useState } from 'react';
import styles from './SearchSection.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieList from './MovieList/MovieList';
import { fetchMovies, getActorId, fetchMoviesByActor } from '@/utils/api';

const SearchSection = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [term, setTerm] = useState('');

    const [selectedCheckbox, setCheckbox] = useState('movie');

    const handleSubmit = async () => {
        if (selectedCheckbox === 'movie') {
            const res = await fetchMovies(term);
            setMoviesData(res);
        } else if (selectedCheckbox === 'actor') {
            const res = await fetchMoviesByActor(term);
            setMoviesData(res);
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
            <MovieList moviesData={moviesData} />
        </div>
    );
};

export default SearchSection;
