import './Footer.css';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <span className="footer-text">CatApp © {year} Yuliia Smirnova</span>
      <div className="social-links">
        {/* <ul>
          <li>
            <a href="">linkedin</a>
            <a href="">github</a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}

export default Footer;
