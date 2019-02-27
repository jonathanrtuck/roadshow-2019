import App from 'components/App';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import expand from 'jss-expand';
import { jss } from 'react-jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import store from 'store';
import theme from 'theme';

/**
 * add jss plugins.
 * @see https://github.com/cssinjs/react-jss#custom-setup
 * @see https://cssinjs.org/jss-plugin-expand?v=v10.0.0-alpha.10
 */
jss.use(expand());

render(
  <JssProvider jss={jss}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('root')
);
