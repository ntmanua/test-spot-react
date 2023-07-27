import styles from '../styles/SearchBar.module.css';
import { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onsubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <form onSubmit={handleSubmit}>
                    <label>Recherche</label>
                    <input value={term} onChange={handleChange} />
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
