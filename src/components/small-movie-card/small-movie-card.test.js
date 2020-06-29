import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";


const Movie = {
  id: 5520,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Kids & Family`,
  year: `2018`,
  starring: [`Johnny Depp`, `Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
  director: `David Yates`,
  background: `https://placeimg.com/1300/512/nature`,
  poster: `http://placehold.it/273x410`,
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: [`The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`],
  rating: `6,6`,
  votes: 500
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
