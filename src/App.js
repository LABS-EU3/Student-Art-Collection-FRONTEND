import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import LandingPage from './Views/LandingPage';

const theme = {
  grayDark: '#7B7A7A',
  grayDark: '#A5A5A5',
  black: '#000000',
  backgroundGreen: '#0F9D58',
  backgroundGreyForm: 'rgba(196, 196, 196, 0.2)',
  backgroundGrey: '#C4C4C4',
  orangeCancelButton: '#FFA439',
  greenSaveButton: 'rgba(49, 215, 21, 0.68)',
  orangeChangePic: '#FD7135',
  red: 'red'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
