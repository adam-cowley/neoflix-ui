/*
MATCH (n:Movie)

WHERE exists(n.imdbRating) and exists(n.poster)

WITH n {
  id: n.imdbId,
  .poster,
  .title,
  .year,
  .languages,
  .plot,
  rating: n.imdbRating,
  directors: [ (n)<-[:DIRECTED]-(d) | d { id: d.imdbId, .name } ],
  actors: [ (n)<-[:ACTED_IN]-(p) | p { id: p.imdbId, .name } ][0..5],
  genres: [ (n)-[:IN_GENRE]->(g) | g {link: '/genres/'+ g.name, .name}]
}
ORDER BY n.rating DESC
LIMIT 6
RETURN collect(n)
 */
export const popular = [
  {
    actors: [
      {
        name: 'Tim Robbins',
        id: '0000209'
      },
      {
        name: 'William Sadler',
        id: '0006669'
      },
      {
        name: 'Bob Gunton',
        id: '0348409'
      },
      {
        name: 'Morgan Freeman',
        id: '0000151'
      }
    ],
    languages: [
      'English'
    ],
    plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    year: 1994,
    genres: [
      {
        link: '/genres/Drama',
        name: 'Drama'
      },
      {
        link: '/genres/Crime',
        name: 'Crime'
      }
    ],
    directors: [
      {
        name: 'Frank Darabont',
        id: '0001104'
      }
    ],
    rating: 9.3,
    id: '0111161',
    title: 'Shawshank Redemption, The',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg'
  },
  {
    actors: [
      {
        name: 'Richard S. Castellano',
        id: '0144710'
      },
      {
        name: 'James Caan',
        id: '0001001'
      },
      {
        name: 'Al Pacino',
        id: '0000199'
      },
      {
        name: 'Marlon Brando',
        id: '0000008'
      }
    ],
    languages: [
      'English',
      ' Italian',
      ' Latin'
    ],
    plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    year: 1972,
    genres: [
      {
        link: '/genres/Drama',
        name: 'Drama'
      },
      {
        link: '/genres/Crime',
        name: 'Crime'
      }
    ],
    directors: [
      {
        name: 'Francis Ford Coppola',
        id: '0000338'
      }
    ],
    rating: 9.2,
    id: '0068646',
    title: 'Godfather, The',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/iVZ3JAcAjmguGPnRNfWFOtLHOuY.jpg'
  },
  {
    actors: [
      {
        name: 'Al Pacino',
        id: '0000199'
      },
      {
        name: 'Robert De Niro',
        id: '0000134'
      },
      {
        name: 'Robert Duvall',
        id: '0000380'
      },
      {
        name: 'Diane Keaton',
        id: '0000473'
      }
    ],
    languages: [
      'English',
      ' Italian',
      ' Spanish',
      ' Latin',
      ' Sicilian'
    ],
    plot: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
    year: 1974,
    genres: [
      {
        link: '/genres/Crime',
        name: 'Crime'
      },
      {
        link: '/genres/Drama',
        name: 'Drama'
      }
    ],
    directors: [
      {
        name: 'Francis Ford Coppola',
        id: '0000338'
      }
    ],
    rating: 9.0,
    id: '0071562',
    title: 'Godfather: Part II, The',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/amvmeQWheahG3StKwIE1f7jRnkZ.jpg'
  },
  {
    actors: [
      {
        name: 'Michael Caine',
        id: '0000323'
      },
      {
        name: 'Heath Ledger',
        id: '0005132'
      },
      {
        name: 'Aaron Eckhart',
        id: '0001173'
      },
      {
        name: 'Christian Bale',
        id: '0000288'
      }
    ],
    languages: [
      'English',
      ' Mandarin'
    ],
    plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    year: 2008,
    genres: [
      {
        link: '/genres/Action',
        name: 'Action'
      },
      {
        link: '/genres/Crime',
        name: 'Crime'
      },
      {
        link: '/genres/Drama',
        name: 'Drama'
      },
      {
        link: '/genres/IMAX',
        name: 'IMAX'
      }
    ],
    directors: [
      {
        name: 'Christopher Nolan',
        id: '0634240'
      }
    ],
    rating: 9.0,
    id: '0468569',
    title: 'Dark Knight, The',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },
  {
    actors: [
      {
        name: 'Lee J. Cobb',
        id: '0002011'
      },
      {
        name: 'E.G. Marshall',
        id: '0550855'
      },
      {
        name: 'Martin Balsam',
        id: '0000842'
      },
      {
        name: 'John Fiedler',
        id: '0275835'
      }
    ],
    languages: [
      'English'
    ],
    plot: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    year: 1957,
    genres: [
      {
        link: '/genres/Drama',
        name: 'Drama'
      }
    ],
    directors: [
      {
        name: 'Sidney Lumet',
        id: '0001486'
      }
    ],
    rating: 8.9,
    id: '0050083',
    title: '12 Angry Men',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/7sf9CgJz30aXDvrg7DYYUQ2U91T.jpg'
  },
  {
    actors: [
      {
        name: 'Helena Bonham Carter',
        id: '0000307'
      },
      {
        name: 'Meat Loaf',
        id: '0001533'
      },
      {
        name: 'Brad Pitt',
        id: '0000093'
      },
      {
        name: 'Edward Norton',
        id: '0001570'
      }
    ],
    languages: [
      'English'
    ],
    plot: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...',
    year: 1999,
    genres: [
      {
        link: '/genres/Drama',
        name: 'Drama'
      },
      {
        link: '/genres/Thriller',
        name: 'Thriller'
      },
      {
        link: '/genres/Action',
        name: 'Action'
      },
      {
        link: '/genres/Crime',
        name: 'Crime'
      }
    ],
    directors: [
      {
        name: 'David Fincher',
        id: '0000399'
      }
    ],
    rating: 8.9,
    id: '0137523',
    title: 'Fight Club',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/wR5HZWdVpcXx9sevV1bQi7rP4op.jpg'
  }
]

/*
MATCH (n:Movie)

WHERE exists(n.releaseDate) and exists(n.poster)

WITH n {
  id: n.imdbId,
  .poster,
  .title,
  .year,
  .languages,
  .plot,
  rating: n.imdbRating,
  directors: [ (n)<-[:DIRECTED]-(d) | d { id: d.imdbId, .name } ],
  actors: [ (n)<-[:ACTED_IN]-(p) | p { id: p.imdbId, .name } ][0..5],
  genres: [ (n)-[:IN_GENRE]->(g) | g {link: '/genres/'+ g.name, .name}]
}
ORDER BY n.releaseDate DESC
LIMIT 6
RETURN collect(n)
*/
export const latest = [
  {
    actors: [
      {
        name: 'Robin Williams',
        id: '0000245'
      },
      {
        name: 'Bradley Pierce',
        id: '0682300'
      },
      {
        name: 'Kirsten Dunst',
        id: '0000379'
      },
      {
        name: 'Jonathan Hyde',
        id: '0404993'
      }
    ],
    languages: [
      'English',
      ' French'
    ],
    plot: 'When two kids find and play a magical board game, they release a man trapped for decades in it and a host of dangers that can only be stopped by finishing the game.',
    year: 1995,
    genres: [
      {
        link: '/genres/Adventure',
        name: 'Adventure'
      },
      {
        link: '/genres/Children',
        name: 'Children'
      },
      {
        link: '/genres/Fantasy',
        name: 'Fantasy'
      }
    ],
    directors: [
      {
        name: 'Joe Johnston',
        id: '0002653'
      }
    ],
    rating: 6.9,
    id: '0113497',
    title: 'Jumanji',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg'
  },
  {
    actors: [
      {
        name: 'Walter Matthau',
        id: '0000527'
      },
      {
        name: 'Ann-Margret',
        id: '0000268'
      },
      {
        name: 'Jack Lemmon',
        id: '0000493'
      },
      {
        name: 'Sophia Loren',
        id: '0000047'
      }
    ],
    languages: [
      'English'
    ],
    plot: "John and Max resolve to save their beloved bait shop from turning into an Italian restaurant, just as its new female owner catches Max's attention.",
    year: 1995,
    genres: [
      {
        link: '/genres/Comedy',
        name: 'Comedy'
      },
      {
        link: '/genres/Romance',
        name: 'Romance'
      }
    ],
    directors: [
      {
        name: 'Howard Deutch',
        id: '0222043'
      }
    ],
    rating: 6.6,
    id: '0113228',
    title: 'Grumpier Old Men',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/1FSXpj5e8l4KH6nVFO5SPUeraOt.jpg'
  },
  {
    actors: [
      {
        name: 'Whitney Houston',
        id: '0001365'
      },
      {
        name: 'Lela Rochon',
        id: '0005375'
      },
      {
        name: 'Angela Bassett',
        id: '0000291'
      },
      {
        name: 'Loretta Devine',
        id: '0222643'
      }
    ],
    languages: [
      'English'
    ],
    plot: "Based on Terry McMillan's novel, this film follows four very different African-American women and their relationships with the male gender.",
    year: 1995,
    genres: [
      {
        link: '/genres/Romance',
        name: 'Romance'
      },
      {
        link: '/genres/Drama',
        name: 'Drama'
      },
      {
        link: '/genres/Comedy',
        name: 'Comedy'
      }
    ],
    directors: [
      {
        name: 'Forest Whitaker',
        id: '0001845'
      }
    ],
    rating: 5.6,
    id: '0114885',
    title: 'Waiting to Exhale',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/4wjGMwPsdlvi025ZqR4rXnFDvBz.jpg'
  },
  {
    actors: [
      {
        name: 'Steve Martin',
        id: '0000188'
      },
      {
        name: 'Kimberly Williams-Paisley',
        id: '0931090'
      },
      {
        name: 'Diane Keaton',
        id: '0000473'
      },
      {
        name: 'Martin Short',
        id: '0001737'
      }
    ],
    languages: [
      'English'
    ],
    plot: 'In this sequel, George Banks deals not only with the pregnancy of his daughter, but also with the unexpected pregnancy of his wife.',
    year: 1995,
    genres: [
      {
        link: '/genres/Comedy',
        name: 'Comedy'
      }
    ],
    directors: [
      {
        name: 'Charles Shyer',
        id: '0796124'
      }
    ],
    rating: 5.9,
    id: '0113041',
    title: 'Father of the Bride Part II',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/lf9RTErt8BSLQy98aSFblElvsCQ.jpg'
  },
  {
    actors: [
      {
        name: 'Al Pacino',
        id: '0000199'
      },
      {
        name: 'Robert De Niro',
        id: '0000134'
      },
      {
        name: 'Val Kilmer',
        id: '0000174'
      },
      {
        name: 'Jon Voight',
        id: '0000685'
      }
    ],
    languages: [
      'English',
      ' Spanish'
    ],
    plot: 'A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.',
    year: 1995,
    genres: [
      {
        link: '/genres/Action',
        name: 'Action'
      },
      {
        link: '/genres/Crime',
        name: 'Crime'
      },
      {
        link: '/genres/Thriller',
        name: 'Thriller'
      }
    ],
    directors: [
      {
        name: 'Michael Mann',
        id: '0000520'
      }
    ],
    rating: 8.2,
    id: '0113277',
    title: 'Heat',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/rrBuGu0Pjq7Y2BWSI6teGfZzviY.jpg'
  },
  {
    actors: [
      {
        name: 'Jim Varney',
        id: '0001815'
      },
      {
        name: 'Tim Allen',
        id: '0000741'
      },
      {
        name: 'Tom Hanks',
        id: '0000158'
      },
      {
        name: 'Don Rickles',
        id: '0725543'
      }
    ],
    languages: [
      'English'
    ],
    plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    year: 1995,
    genres: [
      {
        link: '/genres/Adventure',
        name: 'Adventure'
      },
      {
        link: '/genres/Animation',
        name: 'Animation'
      },
      {
        link: '/genres/Children',
        name: 'Children'
      },
      {
        link: '/genres/Comedy',
        name: 'Comedy'
      },
      {
        link: '/genres/Fantasy',
        name: 'Fantasy'
      }
    ],
    directors: [
      {
        name: 'John Lasseter',
        id: '0005124'
      }
    ],
    rating: 8.3,
    id: '0114709',
    title: 'Toy Story',
    poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg'
  }
]

export const goodfellas = {
  actors: [
    {
      name: 'Ray Liotta',
      id: '0000501'
    },
    {
      name: 'Lorraine Bracco',
      id: '0000966'
    },
    {
      name: 'Joe Pesci',
      id: '0000582'
    },
    {
      name: 'Robert De Niro',
      id: '0000134'
    }
  ],
  plot: 'Henry Hill and his friends work their way up through the mob hierarchy.',
  year: 1990,
  genres: [
    'Crime',
    'Drama'
  ],
  directors: [
    {
      name: 'Martin Scorsese',
      id: '0000217'
    }
  ],
  rating: 8.7,
  languages: ['English', 'Italian'],
  id: '0099685',
  title: 'Goodfellas',
  poster: 'https://image.tmdb.org/t/p/w440_and_h660_face/oErEczcVUmJm0EPdvWsvK4g4Lv3.jpg'
}
