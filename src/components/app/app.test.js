import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const MOVIES = [
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

const PromoMovie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

describe(`App`, () => {
  it(`Should App render correctly`, () => {
    const tree = renderer
      .create(<App
        movies={MOVIES}
        promoMovie={PromoMovie} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
