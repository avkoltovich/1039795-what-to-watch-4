import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";


const Movie = {
  id: 1111,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  director: `Wes Andreson`,
  background: `img/the-grand-budapest-hotel-background.jpg`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  preview: `http://placehold.it/382x177`,
  description: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
  ratingCount: `8,9`,
  ratingLevel: `Very good`,
  votes: 240,
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
