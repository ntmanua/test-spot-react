import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SearchSection.module.css';
import SearchBar from './SearchBar/SearchBar';
import MovieList from './MovieList/MovieList';
const fetchData = async (term) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?`,
            {
                params: {
                    api_key: '30bd5b107af7a883b3777693032f3fac',
                    query: term,
                },
            }
        );

        if (response.data) {
            return response.data.results;
        } else {
            // Handle the case where 'results' is not available in the response
            console.log("No 'results' found in the response.");
        }
    } catch (error) {
        // Handle the error if the request fails
        console.error('Error fetching data:', error);
    }
};

const SearchSection = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [term, setTerm] = useState('');

    const handleSubmit = async () => {
        const res = await fetchData(term);
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
