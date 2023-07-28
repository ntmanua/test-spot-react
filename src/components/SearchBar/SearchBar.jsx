import styles from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar({ term, setTerm, onSubmit }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <form onSubmit={handleFormSubmit}>
                    <label>Recherche</label>
                    <input value={term} onChange={handleChange} />
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
