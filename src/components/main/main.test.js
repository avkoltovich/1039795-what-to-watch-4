import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const MOVIES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

describe(`Main`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
      .create(<Main
        movies={MOVIES}
        movieTitle={Movie.TITLE}
        movieGenre={Movie.GENRE}
        movieYear={Movie.YEAR} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
