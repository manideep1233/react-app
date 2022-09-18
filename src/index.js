import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppThemeProivder from 'themes/AppThemeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppThemeProivder>
    <App />
  </AppThemeProivder>
);

