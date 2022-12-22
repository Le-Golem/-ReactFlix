import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/UserActions";

import profilPic from "../assets/profil-picture.png";

const ModalProfilForm = ({ handleModal }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ id: new Date().getTime(), userName: user, selected: false }));
        setUser("");
        handleModal();
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Ajouter un profil</h1>
            <p>Ajoutez un profil pour un nouvel utilisateur Netflix.</p>
            <hr />
            <div className="flex">
                <img src={profilPic} alt="profil" />
                <div>
                    <label htmlFor="profil" />
                    <input
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        id="profil"
                        placeholder="Nom"
                    />
                </div>
            </div>
            <hr />
            <div>
                <button type="submit">Continuer</button>
                <button type="reset" onClick={handleModal}>
                    Annuler
                </button>
            </div>
        </form>
    );
};

export default ModalProfilForm;
