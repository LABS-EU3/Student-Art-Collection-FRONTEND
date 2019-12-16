import React from 'react';
import { ThemeProvider } from 'styled-components';

import './App.css';
import LandingPage from './Views/LandingPage';

// global style
import GlobalStyle from './Styles/GlobalStyle';
// import theme
import theme from './Styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
