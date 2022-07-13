import { useEffect, useState } from "react";
import "./App.css";
import { MovieCard } from "./MovieCard";
import { IGhibli } from "./ghibli.type";
import { BiSearchAlt2 } from "react-icons/bi";

const App = () => {
  const [movies, setMovies] = useState<IGhibli[]>([]);
  const url = "https://ghibliapi.herokuapp.com/films";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  //Castle in the sky ID: 2baf70d1-42bb-4437-b551-e5fed5a87abe
  async function fetchMovies() {
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then(
        (movies: IGhibli[]) => {
          setMovies(movies);
        },
        (error) => {
          setError(error);
        }
      );
  }

  return (
    <div className="app">
      <h1>GhibliLand</h1>
      <div className="search">
        <div className="searchInput">
          <input
            placeholder="Search for movies"
            value={searchMovie}
            onChange={(event) => setSearchMovie(event.target.value)}
          />
        </div>
        <div className="searchIcon">
          <BiSearchAlt2 />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="searchResult">
          {movies
            .filter((movie) => movie.title.toLowerCase().includes(searchMovie))
            .map((movie) => (
              <div key={movie.id} className="movieCard">
                <MovieCard movie={movie} />
              </div>
            ))}
        </div>
      ) : (
        <div className="empty">
          <h3> No movies found</h3>
        </div>
      )}
    </div>
  );
};

export default App;
