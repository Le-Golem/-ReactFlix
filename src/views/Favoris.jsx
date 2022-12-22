import Header from "../components/Header";
import Footer from "../components/Footer";

import { useDispatch } from "react-redux";
import { deleteFav } from "../actions/FavoriteActions";

const Favoris = ({ profil, favorites }) => {
    const dispatch = useDispatch();
    return (
        <>
            <Header profil={profil} />
            <h2>Les favoris de {profil.userName}</h2>

            {favorites.map((fav) => (
                <div key={fav.movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${fav.movie.poster_path}`} alt={fav.movie.title} />
                    <h3 onClick={() => dispatch(deleteFav({ fav }))}>{fav.movie.title} </h3>
                </div>
            ))}

            <Footer />
        </>
    );
};

export default Favoris;
