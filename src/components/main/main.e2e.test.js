import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e test`, () => {
  it(`Should title link be clicked`, () => {
    const titleLinkHandler = jest.fn();

    const mainComponent = mount(
        <Main
          movies={movies}
          movieCard={movieCard}
          onTitleLinkClick={titleLinkHandler} />
    );

    const mainComponentLinks = mainComponent.find(`.small-movie-card__link`);

    mainComponentLinks.forEach((link) => link.simulate(`click`));

    expect(titleLinkHandler.mock.calls.length).toBe(movies.length);
  });
});
