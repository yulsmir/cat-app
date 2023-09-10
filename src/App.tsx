import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <main>
      {/* Routes */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
