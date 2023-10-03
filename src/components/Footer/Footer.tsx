import './Footer.css';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <p>
        <small>Copyright © {year} Yuliia Smirnova</small>
      </p>
    </footer>
  );
}

export default Footer;
