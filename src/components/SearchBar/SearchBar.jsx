import styles from './SearchBar.module.css';
import Checkbox from '../Checkbox/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
function SearchBar({
    term,
    handleChange,
    selectedCheckbox,
    setCheckbox,
    selectedOption,
    setOption,
}) {
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <form>
                    <label htmlFor='filtre'>Filtre:</label>
                    <div id='filtre' className={styles.optionsDiv}>
                        <Checkbox
                            selectedCheckbox={selectedCheckbox}
                            setCheckbox={setCheckbox}
                        />
                        <Dropdown
                            selectedOption={selectedOption}
                            setOption={setOption}
                        />
                    </div>
                    <label htmlFor='recherche'>Recherche:</label>
                    <input
                        id='recherche'
                        className={styles.searchInput}
                        value={term}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
