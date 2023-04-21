import logo from './logo.svg';
import Header from './components/Header.js';
import MainPage from './views/MainPage';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
