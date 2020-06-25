import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


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

const SelectedMovie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e test`, () => {
  it(`Should title link be clicked`, () => {
    const titleLinkHandler = jest.fn();

    const mainComponent = shallow(
        <Main
          movies={MOVIES}
          selectedMovie={SelectedMovie}
          onTitleLinkClick={titleLinkHandler} />
    );

    const mainComponentLinks = mainComponent.find(`.small-movie-card__link`);

    mainComponentLinks.forEach((link) => link.simulate(`click`));

    expect(titleLinkHandler.mock.calls.length).toBe(MOVIES.length);
  });
});
