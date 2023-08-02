import './App.css';
import Header from './components/Header/Header';
import SearchSection from './components/SearchSection';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className='app-container'>
            <div>
                <Header />
                <SearchSection />
            </div>
            <Footer />
        </div>
    );
}

export default App;
