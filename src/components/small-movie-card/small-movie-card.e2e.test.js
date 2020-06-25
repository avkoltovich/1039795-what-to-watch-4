import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";


const Movie = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCard e2e test`, () => {
  it(`Should SmallMovieCard be hovered`, () => {
    const onCardHover = jest.fn((args) => args);

    const mainComponent = shallow(
        <SmallMovieCard
          movie={Movie}
          onTitleLinkClick={() => {}}
          onCardHover={onCardHover} />
    );

    const movieCards = mainComponent.find(`.small-movie-card`);

    movieCards.forEach((movieCard) => {
      movieCard.simulate(`mouseover`, Movie);
    });

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover.mock.calls[0][0]).toMatchObject(Movie);
  });
});
