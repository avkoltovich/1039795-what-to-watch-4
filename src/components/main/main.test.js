import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movies = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`
  },
  {
    title: `Aviator`,
    image: `img/aviator.jpg`
  },
  {
    title: `Shutter Island`,
    image: `img/shutter-island.jpg`
  },
  {
    title: `Pulp Fiction`,
    image: `img/pulp-fiction.jpg`
  },
  {
    title: `No Country for Old Men`,
    image: `img/no-country-for-old-men.jpg`
  },
  {
    title: `Snatch`,
    image: `img/snatch.jpg`
  },
  {
    title: `Johnny English`,
    image: `img/johnny-english.jpg`
  }
];

const movieCard = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
};

describe(`Main`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<Main
        movies={movies}
        movieCard={movieCard}
        onTitleLinkClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
