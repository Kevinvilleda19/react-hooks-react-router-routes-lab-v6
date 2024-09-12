import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies") // Assuming movies are stored on your json-server
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
