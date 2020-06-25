import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";


const Movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

describe(`SmallMovieCard`, () => {
  it(`Should SmallMovieCard render correctly`, () => {
    const tree = renderer
      .create(<SmallMovieCard
        movie={Movie}
        onTitleLinkClick={() => {}}
        onCardHover={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
