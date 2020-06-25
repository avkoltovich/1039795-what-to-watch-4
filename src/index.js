import App from './components/app/app.jsx';
import {SelectedMovie, MOVIES} from './mocks/films.js';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <App
      movies={MOVIES}
      selectedMovie={SelectedMovie} />,
    document.querySelector(`#root`)
);
