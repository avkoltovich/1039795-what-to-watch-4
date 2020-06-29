import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: `main`,
      currentMovie: this.props.movieCard,
    };

    this.handleTitleLinkClick = this.handleTitleLinkClick.bind(this);
  }


  _renderApp() {
    const {movies, movieCard} = this.props;
    const {currentPage, currentMovie} = this.state;

    if (currentPage === `main`) {
      return (
        <Main
          movies={movies}
          movieCard={movieCard}
          onTitleLinkClick={this.handleTitleLinkClick} />
      );
    }

    if (currentPage === `film`) {
      return (
        <MoviePage
          movieCard={currentMovie} />
      );
    }

    return null;
  }

  handleTitleLinkClick(movie) {
    this.setState({
      currentPage: `film`,
      currentMovie: movie,
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movieCard={this.state.currentMovie} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        director: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        ratingCount: PropTypes.string.isRequired,
        ratingLevel: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
  movieCard: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    director: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ratingCount: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired
};
