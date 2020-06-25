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
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onTitleLinkClick: PropTypes.func.isRequired,
};
