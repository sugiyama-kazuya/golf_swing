import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <div className="text-blue">
        Hello World!
    </div>
    <App /> {}
    </React.StrictMode>,
);