import { deleteFav } from "../actions/FavoriteActions";
import { useDispatch } from "react-redux";
const Favorite = ({ fav }) => {
    const dispatch = useDispatch();
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w500/${fav.movie.poster_path}`} alt={fav.movie.title} />
            <h3 style={{ cursor: "pointer" }} onClick={() => dispatch(deleteFav({ fav }))}>
                {fav.movie.title}
            </h3>
        </>
    );
};

export default Favorite;
