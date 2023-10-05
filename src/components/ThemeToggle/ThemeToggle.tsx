// Dana's implementation of theme
// https://github.com/dxenia/astrology-app/blob/main/src/components/ThemeToggle/ThemeToggle.tsx

import { useContext } from 'react';
import { ThemeContext } from '../../App';

import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  function onChangeHandler() {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleTheme();
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      toggleTheme();
    }
  }

  return (
    <div className="toggle">
      <label className="toggle__switch">
        <input type="checkbox" checked={theme === 'dark'} onChange={onChangeHandler} />
        <span className="toggle__slider round"></span>
      </label>
    </div>
  );
}
