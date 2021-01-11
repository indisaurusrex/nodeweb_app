import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Client from 'shopify-buy';
import App from './App';

const client = Client.buildClient({
    storefrontAccessToken: 'af0600946a50abc38014d844b7920c01',
    domain: 'and-golden-shoe.myshopify.com'
});

ReactDOM.render(
  <React.StrictMode>
        <App client={client}/>,
  </React.StrictMode>,  
  document.getElementById('root')
);
