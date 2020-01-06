import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

export function wrapRootElement({ element }) {
  return (
    <>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
      <GlobalStyle />
    </>
  );
}

wrapRootElement.propTypes = {
  element: PropTypes.any.isRequired,
};
