import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
    <ToastContainer />
  </Provider>
);


// https://api.edamam.com/api/recipes/v2?type=public&q=kebap&app_id=62e033a5&app_key=729cb6811ead0fa9946909da75941584
// https://api.edamam.com/api/recipes/v2?type=public&q=kebap&app_id=62e033a5&app_key=729cb6811ead0fa9946909da75941584