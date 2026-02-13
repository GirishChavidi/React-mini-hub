import { Link } from "react-router-dom";
import MovieApp from "../apps/Movie/MovieApp";

function MoviePage() {
  return (
    <div className="page-wrapper">
      <div className="back-link">
        <Link to="/">⬅ Back to Home</Link>
      </div>

      <MovieApp />
    </div>
  );
}

export default MoviePage;

