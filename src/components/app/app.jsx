import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {moviesTitles, movieTitle, movieGenre, movieYear} = props;

  return (
    <Main
      moviesTitles={moviesTitles}
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieYear={movieYear} />
  );
};

export default App;
