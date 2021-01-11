import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// put this one back in for the other stuff;
// import './App.css';

// for the shopify items
import Client from 'shopify-buy';
// import reportWebVitals from './reportWebVitals';
import App from './App';

const client = Client.buildClient({
    storefrontAccessToken: 'af0600946a50abc38014d844b7920c01',
    domain: 'and-golden-shoe.myshopify.com'
});

ReactDOM.render(
//   <React.StrictMode>
        <App client={client}/>,
//   </React.StrictMode>,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
