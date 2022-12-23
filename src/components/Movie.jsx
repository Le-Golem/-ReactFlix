import { addFav } from "../actions/FavoriteActions";
import { useDispatch } from "react-redux";

const Movie = ({ profil, movie }) => {
    const dispatch = useDispatch();

    return (
        <div style={{ marginRight: "1em", marginLeft: "1em" }} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(addFav({ favID: new Date().getTime(), userID: profil.userID, movie }))}
            >
                {movie.title}
            </h3>
        </div>
    );
};

export default Movie;
