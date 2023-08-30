import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import axios from 'axios';
import { persistor, store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants';

import { App } from 'components/App';
import './index.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
