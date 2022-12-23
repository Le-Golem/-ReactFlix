import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "axios";
import axios from "axios";
import { useState, useEffect } from "react";
import { topRatedMovies1, topRatedMovies2, topRatedMovies3 } from "../components/Api";

import HomeProfil from "../views/HomeProfil";
import Home from "../views/Home";
import Favoris from "../views/Favoris";
import NotFound from "../views/NotFound";

const ReactFlixRouter = () => {
    const [movies1, setMovies1] = useState([]);
    const [movies2, setMovies2] = useState([]);
    const [movies3, setMovies3] = useState([]);

    const { favorites } = useSelector((state) => state.FavoriteReducer);
    const { users } = useSelector((state) => state.ProfilReducer);

    const user = users.filter((u) => u.selected === true)[0];

    const favorite = user ? favorites.filter((u) => u.userID === user.userID) : [];

    useEffect(() => {
        axios.get(topRatedMovies1).then((response) => {
            setMovies1(response.data.results);
        });
        axios.get(topRatedMovies2).then((response) => {
            setMovies2(response.data.results);
        });
        axios.get(topRatedMovies3).then((response) => {
            setMovies3(response.data.results);
        });
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomeProfil />} />
                    {user && (
                        <>
                            <Route
                                path="/home"
                                element={<Home profil={user} movies1={movies1} movies2={movies2} movies3={movies3} />}
                            />
                            <Route path="/favoris" element={<Favoris profil={user} favorites={favorite} />} />
                        </>
                    )}
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default ReactFlixRouter;
