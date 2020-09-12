import React from 'react';
import PropTypes from 'prop-types';

const movieILike = [
  {
    id: 1,
    name: 'iron man',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg',
    rating: 4.9
  },
  {
    id: 2,
    name: 'lala land',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png',
    rating: 4.6
  },
  {
    id: 3,
    name: 'avengers',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg',
    rating: 4.5
  },
  {
    id: 4,
    name: 'spider man',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71bD1oNkYnL._AC_SY879_.jpg',
    rating: 4.2
  },
]

function Movie({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

  Movie.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}

function App() {
  return (
    <div>
      {movieILike.map(movies => (
        <Movie
          key={movies.id}
          name={movies.name}
          picture={movies.image}
          rating={movies.rating}
        />
      ))}
    </div>
  );
}

export default App;