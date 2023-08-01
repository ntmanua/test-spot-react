import { useEffect, useState } from 'react';
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

    const handleChange = async (event) => {
        const newTerm = event ? event.target.value : term;
        setTerm(newTerm);

        if (selectedCheckbox === 'movie') {
            try {
                const res = await fetchMovies(term);
                if (res.length === 0) {
                    setError('Aucun résultat');
                    setMoviesData([]);
                } else {
                    const sortedMovies = sortMovies(res, selectedOption);
                    console.log(res);
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
                    const sortedMovies = sortMovies(res, selectedOption);
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
        handleChange();
    }, [selectedOption]);

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
            <StarRating />
        </div>
    );
};

import React from 'react';

function StarRating() {
    const [ratingWidth, setRatingWidth] = useState(0);

    const handleApplyClick = (e) => {
        e.preventDefault();
        const inputVal = document.getElementById('p').value;
        setRatingWidth(inputVal);
    };

    return (
        <div class='flex items-center'>
            <svg
                class='w-4 h-4 text-yellow-300 mr-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 20'
            >
                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>
            <p class='ml-2 text-sm font-bold text-gray-900 dark:text-black'>
                4.95
            </p>
            <span class='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
            <a
                href='#'
                class='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-black'
            >
                73 reviews
            </a>
        </div>
    );
}

export default SearchSection;
