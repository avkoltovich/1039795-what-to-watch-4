import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const MOVIES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

ReactDOM.render(
    <App
      movies={MOVIES}
      movieTitle={Movie.TITLE}
      movieGenre={Movie.GENRE}
      movieYear={Movie.YEAR} />,
    document.querySelector(`#root`)
);
