import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";


const movies = [
  {
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
    ratingCount: `6,6`,
    ratingLevel: `Very good`,
    votes: 500,
  },
  {
    id: 1236,
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    year: `2018`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    director: `Bryan Singer`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/bohemian-rhapsody.jpg`,
    description: [`The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`],
    ratingCount: `8,0`,
    ratingLevel: `Very good`,
    votes: 800,
  },
  {
    id: 1587,
    title: `Aviator`,
    genre: `Drama`,
    year: `2004`,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
    director: `Martin Scorsese`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/aviator.jpg`,
    description: [`A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`],
    ratingCount: `7,5`,
    ratingLevel: `Very good`,
    votes: 1650,
  },
  {
    id: 6652,
    title: `Shutter Island`,
    genre: `Thriller`,
    year: `2010`,
    starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    director: `Martin Scorsese`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/shutter-island.jpg`,
    description: [`In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`],
    ratingCount: `8,1`,
    ratingLevel: `Very good`,
    votes: 900,
  },
  {
    id: 1999,
    title: `Pulp Fiction`,
    genre: `Crime`,
    year: `1994`,
    starring: [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`, `Bruce Willis`],
    director: `Quentin Tarantino`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/pulp-fiction.jpg`,
    description: [`The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`],
    ratingCount: `8,9`,
    ratingLevel: `Very good`,
    votes: 2500,
  },
  {
    id: 3675,
    title: `No Country for Old Men`,
    genre: `Thriller`,
    year: `2007`,
    starring: [`Tommy Lee Jones`, `Javier Bardem`, `Josh Brolin`],
    director: `Ethan Coen, Joel Coen`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/no-country-for-old-men.jpg`,
    description: [`Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`],
    ratingCount: `8,1`,
    ratingLevel: `Very good`,
    votes: 870,
  },
  {
    id: 4455,
    title: `Snatch`,
    genre: `Crime`,
    year: `2000`,
    starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
    director: `Guy Ritchie`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/snatch.jpg`,
    description: [`Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`],
    ratingCount: `8,3`,
    ratingLevel: `Very good`,
    votes: 1500,
  },
  {
    id: 9987,
    title: `Johnny English`,
    genre: `Comedy`,
    year: `2003`,
    starring: [`Rowan Atkinson`, `Ben Miller`, `Olga Kurylenko`],
    director: `David Kerr`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `http://placehold.it/273x410`,
    preview: `img/johnny-english.jpg`,
    description: [`After a cyber-attack reveals the identity of all of the active undercover agents in Britain, Johnny English (Rowan Atkinson) is forced to come out of retirement to find the mastermind hacker.`],
    ratingCount: `6,2`,
    ratingLevel: `Very good`,
    votes: 300,
  }
];

describe(`MoviesList`, () => {
  it(`Should MoviesList render correctly`, () => {
    const tree = renderer
      .create(<MoviesList
        movies={movies}
        onTitleLinkClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
