import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import HomeProfil from "../views/HomeProfil";
import Home from "../views/Home";
import Favoris from "../views/Favoris";
import NotFound from "../views/NotFound";

const ReactFlixRouter = () => {
    const { users } = useSelector((state) => state.ProfilReducer);
    const user = users.filter((u) => u.selected === true)[0];

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomeProfil />} />
                    {user && (
                        <>
                            <Route path="/home" element={<Home profil={user} />} />
                            <Route path="/favoris" element={<Favoris profil={user} />} />
                        </>
                    )}
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default ReactFlixRouter;
