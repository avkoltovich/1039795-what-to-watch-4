import React from 'react';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';


const App = (props) => {
  const {moviesTitles, movieTitle, movieGenre, movieYear} = props;

  return (
    <Main
      moviesTitles={moviesTitles}
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear} />
  );
};

App.propTypes = {
  moviesTitles: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired
};


export default App;
