import MovieList from "../components/MovieList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({ profil, movies1, movies2 }) => {
    return (
        <>
            <Header profil={profil} />

            <MovieList profil={profil} movies1={movies1} movies2={movies2} />
            <Footer />
        </>
    );
};

export default Home;
