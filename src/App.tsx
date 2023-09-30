import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage';
import VotePage from './pages/VotePage';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/breeds" element={<BreedsPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
