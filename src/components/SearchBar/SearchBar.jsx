import styles from './SearchBar.module.css';
import Checkbox from '../Checkbox/Checkbox';
function SearchBar({ term, handleChange, selectedCheckbox, setCheckbox }) {
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <form>
                    <label>Filtres tes recherches:</label>
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
