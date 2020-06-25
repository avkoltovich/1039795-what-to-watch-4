import App from './components/app/app.jsx';
import {PromoMovie, MOVIES} from './mocks/films.js';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <App
      movies={MOVIES}
      promoMovie={PromoMovie} />,
    document.querySelector(`#root`)
);
