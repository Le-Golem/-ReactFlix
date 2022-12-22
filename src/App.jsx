import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeProfil from "./views/HomeProfil";
import Home from "./views/Home";
import Favoris from "./views/Favoris";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomeProfil />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/favoris" element={<Favoris />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
