import { useState, useEffect } from 'react';
import styles from './SearchSection.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieList from './MovieList/MovieList';
import fetchMovies from '@/utils/api';

const SearchSection = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [term, setTerm] = useState('');

    const handleSubmit = async () => {
        const res = await fetchMovies(term);
        setMoviesData(res);
        console.log(res);
    };

    return (
        <div className={styles.container}>
            <SearchBar term={term} setTerm={setTerm} onSubmit={handleSubmit} />
            <MovieList moviesData={moviesData} />
        </div>
    );
};

export default SearchSection;
