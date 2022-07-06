import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './pages/Root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
    <ToastContainer />
  </React.StrictMode>
);
