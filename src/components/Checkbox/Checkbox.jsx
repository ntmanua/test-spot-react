import styles from './Checkbox.module.css';
import { useState } from 'react';
const Checkbox = ({ selectedCheckbox, setCheckbox }) => {
    const handleCheckboxChange = (checkBoxValue) => {
        setCheckbox(checkBoxValue);
    };

    return (
        <div className={styles.container}>
            <label>
                <input
                    type='checkbox'
                    checked={selectedCheckbox === 'movie'}
                    onChange={() => handleCheckboxChange('movie')}
                />
                Movie name
            </label>
            <br />
            <label>
                <input
                    type='checkbox'
                    checked={selectedCheckbox === 'actor'}
                    onChange={() => handleCheckboxChange('actor')}
                />
                Actor name
            </label>
        </div>
    );
};

export default Checkbox;
