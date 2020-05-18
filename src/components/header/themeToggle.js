import React from 'react';
import icon from '../../images/icons/icons.svg';
import { ToggleIcon } from './style';
import { useState } from 'react';
import { getInitialColorMode } from '../../utils/themeHelper';
import { useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialColorMode());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined')
      window.localStorage.setItem('color-mode', theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
    document.documentElement.classList.remove('theme-tansition');
    document.documentElement.classList.add('theme-tansition');
    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-tansition');
      }, 750);
      window.localStorage.setItem('color-mode', theme);
    }
  };

  return (
    <ToggleIcon onClick={changeTheme}>
      {theme === 'light' && (
        <svg>
          <use href={icon + '#moon'} />
        </svg>
      )}
      {theme === 'dark' && (
        <svg className="lightIcon" viewBox="0 0 10 10">
          <use href={icon + '#sun'} />
        </svg>
      )}
    </ToggleIcon>
  );
}

export default ThemeToggle;
