import { useState } from "react";
import ModalProfilForm from "./ModalProfilForm";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../actions/UserActions";
import profilpicture from "../assets/profil-picture.png";

const Profil = () => {
    const { users } = useSelector((state) => state.ProfilReducer);
    const [modalProfil, setModalProfil] = useState(false);
    const dispatch = useDispatch();

    console.log(users);

    const handleModal = () => {
        setModalProfil(!modalProfil);
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
                            <li className="profil" key={user.id}>
                                <img onClick={() => dispatch(selectUser(user.id))} src={profilpicture} alt="" />
                                {user.userName}
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
