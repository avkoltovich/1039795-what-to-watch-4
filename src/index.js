import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

ReactDOM.render(
    <App
      movieTitle={Movie.TITLE}
      movieGenre={Movie.GENRE}
      movieYear={Movie.YEAR} />,
    document.querySelector(`#root`)
);
