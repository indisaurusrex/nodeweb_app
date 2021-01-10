import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// for the shopify items
import Client from 'shopify-buy';
// for the responsiveness
import { Breakpoint, BreakpointProvider } from 'react-socks';
// import reportWebVitals from './reportWebVitals';

const client = Client.buildClient({
    storefrontAccessToken: 'af0600946a50abc38014d844b7920c01',
    domain: 'and-golden-shoe.myshopify.com'
});

ReactDOM.render(
  <React.StrictMode>
    <BreakpointProvider>
        <App client={client}/>
    </BreakpointProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
