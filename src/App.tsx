import { createContext, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import VotePage from './pages/VotePage';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import Footer from './components/Footer/Footer';
import ImagesSearchPage from './pages/ImagesSearchPage/ImagesSearchPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import GamePage from './pages/GamePage/GamePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import './App.css';

type Theme = 'light' | 'dark';
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  document.documentElement.setAttribute('data-theme', theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/breeds" element={<BreedsPage />} />
          <Route path="/images-search" element={<ImagesSearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/error" element={<ErrorPage />} />
          {/* For the incorrect routes */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
