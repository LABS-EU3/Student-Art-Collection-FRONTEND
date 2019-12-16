import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import LandingPage from './Views/LandingPage';

const theme = {
  grayDark: '#7B7A7A',
  grayLight: '#A5A5A5',
  black: '#000000',
  backgroundGreen: '#0F9D58',
  backgroundGreyForm: 'rgba(196, 196, 196, 0.2)',
  backgroundGrey: '#C4C4C4',
  orangeCancelButton: '#FFA439',
  greenSaveButton: 'rgba(49, 215, 21, 0.68)',
  orangeChangePic: '#FD7135'
  //   line below is to show how to use theme variable inside any styled component
  //   red: 'red'
};

// https://www.styled-components.com/docs/api#createglobalstyle

const GlobalStyle = createGlobalStyle`

	/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
	html {
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit
	}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
