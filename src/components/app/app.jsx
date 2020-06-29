import React from 'react';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';


const titleLinkHandler = () => {};

const App = (props) => {
  const {movies, movieCard} = props;

  return (
    <Main
      movies={movies}
      movieCard={movieCard}
      onTitleLinkClick={titleLinkHandler} />
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  movieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired
};


export default App;
