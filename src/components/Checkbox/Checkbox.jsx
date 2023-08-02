import styles from './Checkbox.module.css';
const Checkbox = ({ selectedCheckbox, setCheckbox }) => {
    const handleCheckboxChange = (checkBoxValue) => {
        setCheckbox(checkBoxValue);
    };

    return (
        <div className={styles.container}>
            <label>Rechercher par:</label>
            <label>
                <input
                    type='checkbox'
                    checked={selectedCheckbox === 'movie'}
                    onChange={() => handleCheckboxChange('movie')}
                />{' '}
                Nom de film
            </label>
            <label>
                <input
                    type='checkbox'
                    checked={selectedCheckbox === 'actor'}
                    onChange={() => handleCheckboxChange('actor')}
                />{' '}
                Nom d'acteur
            </label>
        </div>
    );
};

export default Checkbox;
