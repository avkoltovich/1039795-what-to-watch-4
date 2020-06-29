import App from './components/app/app.jsx';
import {movieCard, movies} from './mocks/films.js';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <App
      movies={movies}
      movieCard={movieCard} />,
    document.querySelector(`#root`)
);
