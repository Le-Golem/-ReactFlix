import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { addFav } from "../actions/FavoriteActions";
import { useDispatch } from "react-redux";

const MovieList = ({ profil, movies1, movies2 }) => {
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <>
            <Slider {...settings}>
                {movies1.length > 0 &&
                    movies1.map((movie) => (
                        <li key={movie.id} className="movie-item">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            <h3
                                onClick={() =>
                                    dispatch(addFav({ favID: new Date().getTime(), userID: profil.id, movie }))
                                }
                            >
                                {movie.title}
                            </h3>
                        </li>
                    ))}
            </Slider>
            <Slider {...settings}>
                {movies2.length > 0 &&
                    movies2.map((movie) => (
                        <li key={movie.id} className="movie-item">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            <h3
                                onClick={() =>
                                    dispatch(addFav({ favID: new Date().getTime(), userID: profil.id, movie }))
                                }
                            >
                                {movie.title}
                            </h3>
                        </li>
                    ))}
            </Slider>
        </>
    );
};

export default MovieList;
