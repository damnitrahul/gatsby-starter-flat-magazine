import React from 'react'

const InitialTheme = () => {
  let codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    return 'light';
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.setAttribute('data-theme', colorMode)
})()`
  return <script dangerouslySetInnerHTML={{__html: codeToRunOnClient}} />
}

export const onRenderBody = ({setPreBodyComponents}) => {
  setPreBodyComponents(<InitialTheme />)
}
