import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Jokes } from './Joke/index.jsx';
import { Home } from './Home/index.jsx';

const App = () => {
  return (
    <>
    <Home/>
    </>
  )
};

createRoot(document.querySelector('#app')).render(<App />);
