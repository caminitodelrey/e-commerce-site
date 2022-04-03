import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import App from './components/App.jsx';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);