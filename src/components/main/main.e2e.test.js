import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title link be clicked`, () => {
  const titleLinkHandler = jest.fn();

  const mainComponent = shallow(
      <Main
        movies={MOVIES}
        movieTitle={Movie.TITLE}
        movieGenre={Movie.GENRE}
        movieYear={Movie.YEAR}
        onTitleLinkClick={titleLinkHandler} />
  );

  const mainComponentLinks = mainComponent.find(`.small-movie-card__link`);

  mainComponentLinks.forEach((link) => link.simulate(`click`));

  expect(titleLinkHandler.mock.calls.length).toBe(MOVIES.length);
});
