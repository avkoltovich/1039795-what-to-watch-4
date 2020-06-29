import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';


export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: null
    };
  }

  render() {
    const {movies, onTitleLinkClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => {
          return (
            <SmallMovieCard
              key={movie.title + index}
              movie={movie}
              onTitleLinkClick={onTitleLinkClick}
              onCardHover={() => {
                this.setState({
                  currentMovie: movie
                });
              }}
            />
          );
        })}
      </div>
    );
  }
}


MoviesList.propTypes = {
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
  onTitleLinkClick: PropTypes.func.isRequired,
};
