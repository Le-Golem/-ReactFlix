import { Link } from "react-router-dom";
import reactFlixLogo from "../assets/react-flix.png";
import profilPicture from "../assets/profil-picture.png";
const Header = ({ profil }) => {
    return (
        <header>
            <Link to={"/home"}>
                <img src={reactFlixLogo} alt="" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link to={"/favoris"}>Mes favoris</Link>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">TV Shows</a>
                    </li>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">My List</a>
                    </li>
                </ul>
            </nav>
            <form>
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </form>
            <Link to={"/"}>
                <h1 style={{ textDecoration: "none" }}>{profil.userName} </h1>
            </Link>
        </header>
    );
};

export default Header;
