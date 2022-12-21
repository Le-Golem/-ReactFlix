import { useState } from "react";
import ModalProfilForm from "./ModalProfilForm";

const Profil = () => {
    const [modalProfil, setModalProfil] = useState(null);

    return (
        <>
            {modalProfil ? (
                <ModalProfilForm />
            ) : (
                <>
                    <h1>Qui est-ce ?</h1>
                    <button onClick={() => setModalProfil(true)}>+</button>
                    <p>Ajouter un profil</p>
                </>
            )}
        </>
    );
};

export default Profil;
