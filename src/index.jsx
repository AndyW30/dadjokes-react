import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Jokes } from './Joke';
import { JokesExample } from './Jokes/index.js';

const App = () => {
  return (
    <>
      {JokesExample.map((joke) => (
        <Jokes
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
