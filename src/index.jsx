import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Jokes } from './Joke';

const App = () => {
  return (
    <>
    <Jokes/>
    </>
  )
};

createRoot(document.querySelector('#app')).render(<App />);
