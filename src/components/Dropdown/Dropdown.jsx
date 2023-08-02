import styles from './Dropdown.module.css';

const Dropdown = ({ selectedOption, setOption }) => {
    const handleOptionChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <div className={styles.container}>
            <h1>Trier par:</h1>
            <label htmlFor='dropdown' />
            <select
                className={styles.selection}
                value={selectedOption}
                onChange={handleOptionChange}
            >
                <option value=''>...</option>
                <option value='option1'>Du plus au moins récent</option>
                <option value='option2'>Du meilleur au plus nul</option>
            </select>
        </div>
    );
};

export default Dropdown;
