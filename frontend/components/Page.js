import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navigation from './Navigation';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'work_sans';
    src: url('/static/WorkSans-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'work_sans';
    src: url('/static/WorkSans-Italic.otf') format('opentype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'work_sans';
    src: url('/static/WorkSans-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'work_sans';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <GlobalStyle />
      <Navigation />
      <Inner>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

export default Page;
