import Slider from "react-slick";
import "axios";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import api from "../components/Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(api).then((response) => {
            setMovies(response.data.results);

            console.log(response.data);
        });
    }, []);
    return (
        <Slider {...settings}>
            {movies.length > 0 &&
                movies.map((movie) => (
                    <li key={movie.id} className="movie-item">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </li>
                ))}
        </Slider>
    );
};

export default MovieList;
