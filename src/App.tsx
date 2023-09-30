import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage';
import VotePage from './pages/VotePage';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import Footer from './components/Footer/Footer';
import ImagesSearchPage from './pages/ImagesSearchPage/ImagesSearchPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/breeds" element={<BreedsPage />} />
        <Route path="/images-search" element={<ImagesSearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
