import { useState } from "react";
import ModalProfilForm from "./ModalProfilForm";
import { useSelector } from "react-redux";

const Profil = () => {
    const { users } = useSelector((state) => state.ProfilReducer);
    const [modalProfil, setModalProfil] = useState(false);

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
                        {users.map((user, i) => (
                            <li className="profil" key={i}>
                                <img
                                    src="https://occ-0-2250-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                                    alt=""
                                />
                                {user}
                            </li>
                        ))}
                        <li>
                            <button onClick={handleModal}>+</button>
                            <p>Ajouter un profil</p>
                        </li>
                    </ul>
                </>
            )}
        </>
    );
};

export default Profil;
