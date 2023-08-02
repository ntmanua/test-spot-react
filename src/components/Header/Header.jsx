import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo' />
            <div className={styles.title}>
                <h1>popcorn ?</h1>
                <h2> Que mater avec ton</h2>
            </div>
        </div>
    );
};

export default Header;
