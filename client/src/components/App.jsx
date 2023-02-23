import React from 'react';


var sampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const SearchBar = (props) => {

  return (
    <form>
      <input type="text"></input>

    </form>
  )
}


const MovieItem = (props) => (
  <div className="movie">
    <li>{props.movie.title}</li>
  </div>
)
const MovieList = (props) => {

  return (
    <ul>
      {props.moviesList.map((movie) => (
        <MovieItem key={movie.title} movie={movie} />
      ))}
    </ul>
  )
};

const App = (props) => {
  const [moviesList, setMoviesList] = React.useState(sampleMovies);
  // console.log(moviesList);
  return (
  <div>
    <div className="topbar">
    <h1>Movie List</h1>
    </div>
    <SearchBar />
    <MovieList moviesList={moviesList} />
  </div>
);
};

export default App;