import { Link } from "react-router-dom";

const Home = ({ profil }) => {
    return (
        <>
            <h1>{profil.userName}</h1>
            <div>
                <Link to={"/"}>gérer mes profils</Link>
            </div>
            <div>
                <Link to={"/favoris"}>Mes favoris</Link>
            </div>
        </>
    );
};

export default Home;
