import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const https = require("https");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * with async await
   */
  const fectMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      /*const response = await fetch("https://swapi.dev/api/films/", {
        agent: new https.Agent({
          rejectUnathorized: false,
        }),
      });*/

      /**
       * Using firebase
       */
      const response = await fetch(
        "https://react-http-2b74b-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
        {
          agent: new https.Agent({
            rejectUnathorized: false,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      /** commented this code cause switched to firebase
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });      
      setMovies(transformedMovies);*/

      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [https.Agent]);

  useEffect(() => {
    fectMoviesHandler();
  }, [fectMoviesHandler]);

  /*function fectMoviesHandler() {
    fetch("https://swapi.dev/api/films/", {
      agent: new https.Agent({
        rejectUnathorized: false,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      })
      .catch();
  }*/

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-2b74b-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fectMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
