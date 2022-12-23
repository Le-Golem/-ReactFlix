import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, deleteUser } from "../actions/UserActions";
import { useNavigate } from "react-router-dom";
import { deleteFavUser } from "../actions/FavoriteActions";

import profilpicture from "../assets/profil-picture.png";

import ModalProfilForm from "./ModalProfilForm";

const Profil = () => {
    const { users } = useSelector((state) => state.ProfilReducer);
    const [modalProfil, setModalProfil] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleModal = () => {
        setModalProfil(!modalProfil);
    };

    const handleClick = (userID) => {
        dispatch(selectUser(userID));
        navigate("/home");
    };

    const deleteFavByUser = (user) => {
        dispatch(deleteUser({ user }));
        dispatch(deleteFavUser({ user }));
    };

    return (
        <>
            {modalProfil ? (
                <ModalProfilForm handleModal={handleModal} />
            ) : (
                <>
                    <h1>Qui est-ce ?</h1>
                    <ul className="flex even">
                        {users.map((user) => (
                            <li className="profil" key={user.userID}>
                                <img onClick={() => handleClick(user.userID)} src={profilpicture} alt="" />
                                <h3 style={{ cursor: "pointer" }} onClick={() => deleteFavByUser(user)}>
                                    {user.userName}
                                </h3>
                            </li>
                        ))}
                        <li>
                            <button onClick={handleModal}>+</button>
                            <p>Ajouter un profil</p>
                        </li>
                    </ul>
                    {users.length > 0 && <button>Editer les profils</button>}
                </>
            )}
        </>
    );
};

export default Profil;
