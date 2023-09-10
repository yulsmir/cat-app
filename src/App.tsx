import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <main>
      {/* Navigation */}
      {/* Routes */}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
