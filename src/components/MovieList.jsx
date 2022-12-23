import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Movie from "./Movie";

const MovieList = ({ profil, movies1, movies2, movies3 }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <>
            {" "}
            <h2>Top de la semaine</h2>
            <Slider {...settings}>
                {movies1.length > 0 && movies1.map((movie) => <Movie key={movie.id} profil={profil} movie={movie} />)}
            </Slider>
            <h2>Films du moment</h2>
            <Slider {...settings}>
                {movies2.length > 0 && movies2.map((movie) => <Movie key={movie.id} profil={profil} movie={movie} />)}
            </Slider>
            <h2>Films d'auteurs</h2>
            <Slider {...settings}>
                {movies3.length > 0 && movies3.map((movie) => <Movie key={movie.id} profil={profil} movie={movie} />)}
            </Slider>
        </>
    );
};

export default MovieList;
