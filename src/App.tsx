import './App.css';

import Main from './components/main/main.tsx';
import Navbar from './components/nav/navbar.tsx';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer element="footer">Footer</Footer>
    </>
  );
}

export default App;
