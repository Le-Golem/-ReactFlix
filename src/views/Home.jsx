import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const { users } = useSelector((state) => state.ProfilReducer);
    const user = users.filter((u) => u.selected === true)[0];

    return (
        <>
            <div>
                <Link to={"/"}>gérer mes profils</Link>
            </div>
            <div>
                <Link to={"/favoris"}>Mes favoris</Link>
            </div>
            <h1>{user.userName}</h1>
        </>
    );
};

export default Home;
