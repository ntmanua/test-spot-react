import { useState } from 'react';
import styles from './SearchBar.module.css';
import Checkbox from '../Checkbox/Checkbox';
function SearchBar({ term, setTerm, onSubmit, selectedCheckbox, setCheckbox }) {
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
                    <Checkbox
                        selectedCheckbox={selectedCheckbox}
                        setCheckbox={setCheckbox}
                    />
                    <input value={term} onChange={handleChange} />
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
