import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchSection from './components/SearchSection';

function App() {
    return (
        <div className='app-container'>
            <Header />
            <SearchSection />
        </div>
    );
}

export default App;
