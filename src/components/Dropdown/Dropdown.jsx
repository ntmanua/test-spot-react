import styles from './Dropdown.module.css';

const Dropdown = ({ selectedOption, handleChange }) => {
    return (
        <div>
            <h1>Trier par:</h1>
            <label htmlFor='dropdown' />
            <select value={selectedOption} onChange={handleChange}>
                <option value=''>...</option>
                <option value='option1'>Du plus jeune aux plus vieux</option>
                <option value='option2'>Du meilleur au plus nul</option>
            </select>
        </div>
    );
};

export default Dropdown;
