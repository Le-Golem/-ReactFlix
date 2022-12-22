import Header from "../components/Header";
import Footer from "../components/Footer";
const Favoris = ({ profil }) => {
    return (
        <>
            <Header profil={profil} />
            <h2>Les favoris de {profil.userName}</h2>

            <Footer />
        </>
    );
};

export default Favoris;
