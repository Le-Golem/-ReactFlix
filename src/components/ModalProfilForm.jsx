import profilPic from "../assets/profil-picture.png";
import { useState } from "react";

const ModalProfilForm = () => {
    const [user, setUser] = useState("");
    const [profil, setProfil] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfil(user);
    };

    console.log(user);

    return (
        <form onSubmit={handleSubmit}>
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
                <button>Annuler</button>
            </div>
        </form>
    );
};

export default ModalProfilForm;
