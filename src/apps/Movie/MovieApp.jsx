import { useState, useEffect, useMemo } from "react";
import MovieCard from "./MovieCard";
import "./MovieApp.css";

const MOVIES_LIST = [
  { id: 1, title: "Bahubali" },
  { id: 2, title: "KGF" },
  { id: 3, title: "Pushpa" },
  { id: 4, title: "RRR" },
  { id: 5, title: "Jawan" },
  { id: 6, title: "Kalki 2898 AD" },
  { id: 7, title: "Avengers: Endgame" },
  { id: 8, title: "Interstellar" },
  { id: 9, title: "The Dark Knight" },
  { id: 10, title: "Inception" }
];

export default function MoviesApp() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate API fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setMovies(MOVIES_LIST);
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  // Memoized filtering
  const filteredMovies = useMemo(() => {
    if (!debouncedSearch.trim()) return movies;

    const lower = debouncedSearch.toLowerCase();
    return movies.filter((m) =>
      m.title.toLowerCase().includes(lower)
    );
  }, [debouncedSearch, movies]);

  // Update document title
  useEffect(() => {
    document.title = filteredMovies.length
      ? `Movies (${filteredMovies.length})`
      : "Movie Search";
  }, [filteredMovies]);

  return (
    <div className="movie-wrapper">
      <div className="movie-card">
        <h2>🎬 Movie Search</h2>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="movie-input"
        />

        <div className="movie-info">
          Total: {movies.length} • Showing: {filteredMovies.length}
        </div>

        {loading ? (
          <div className="spinner"></div>
        ) : filteredMovies.length > 0 ? (
          <div className="movie-list">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                search={debouncedSearch}
              />
            ))}
          </div>
        ) : (
          <p className="no-result">No movies found</p>
        )}
      </div>
    </div>
  );
}
