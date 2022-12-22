import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({ profil }) => {
    return (
        <>
            <Header profil={profil} />

            <MovieList />
            <Footer />
        </>
    );
};

export default Home;
