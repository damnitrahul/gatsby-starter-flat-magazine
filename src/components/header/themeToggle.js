import React from 'react';
import icon from '../../images/icons/icons.svg';
import { ToggleIcon } from './style';

function ThemeToggle() {
  return (
    <ToggleIcon>
      <svg>
        <use href={icon + '#moon'} />
      </svg>
    </ToggleIcon>
  );
}

export default ThemeToggle;
