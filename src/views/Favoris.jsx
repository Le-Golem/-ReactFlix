import Header from "../components/Header";
import Footer from "../components/Footer";
import Favorite from "../components/Favorite";

const Favoris = ({ profil, favorites }) => {
    return (
        <>
            <Header profil={profil} />
            <h2>Les favoris de {profil.userName}</h2>

            {favorites.map((fav) => (
                <Favorite key={fav.movie.id} fav={fav} />
            ))}

            <Footer />
        </>
    );
};

export default Favoris;
