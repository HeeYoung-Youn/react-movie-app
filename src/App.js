import React from 'react';

function Movie({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const movieILike = [
  {
    name: 'iron man',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg'
  },
  {
    name: 'lala land',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png'
  },
  {
    name: 'avengers',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg'
  },
  {
    name: 'spider man',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71bD1oNkYnL._AC_SY879_.jpg'
  },
]

function App() {
  return (
    <div>
      {movieILike.map(movies => (
        <Movie name={movies.name} picture={movies.image} />
      ))}
    </div>
  );
}

export default App;