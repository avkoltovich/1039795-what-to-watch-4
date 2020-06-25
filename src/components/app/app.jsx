import React from 'react';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';


const titleLinkHandler = () => {};

const App = (props) => {
  const {movies, selectedMovie} = props;

  return (
    <Main
      movies={movies}
      selectedMovie={selectedMovie}
      onTitleLinkClick={titleLinkHandler} />
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  selectedMovie: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.string.isRequired,
  }).isRequired
};


export default App;
