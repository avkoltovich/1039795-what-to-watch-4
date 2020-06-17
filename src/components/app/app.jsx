import React from 'react';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';


const App = (props) => {
  const {movies, movieTitle, movieGenre, movieYear} = props;

  return (
    <Main
      movies={movies}
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear} />
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired
};


export default App;
