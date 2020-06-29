import React from 'react';
import PropTypes from 'prop-types';


const SmallMovieCard = ({movie, onTitleLinkClick, onCardHover}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={onCardHover}
    >
      <div className="small-movie-card__image">
        <img src={movie.preview} alt={movie.title} width="280" height="175" />
      </div>
      <h3
        onClick={onTitleLinkClick}
        className="small-movie-card__title"
      >
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>);
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
  onTitleLinkClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};


export default SmallMovieCard;
