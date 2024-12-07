import React, { useContext } from "react";
import { FormateursContext } from "./FormateursApp";

export default function FormateursLayout() {
    const { formateurs, actions } = useContext(FormateursContext);

    const handleAddFormateur = () => {
        const fullName = prompt("Enter formateur's full name:");
        const country = prompt("Enter formateur's country:");
        if (fullName && country) {
            actions.addFormateur({ fullName, country });
        }
    };

    const handleDeleteFormateur = (id) => {
        if (window.confirm("Are you sure you want to delete this formateur?")) {
            actions.deleteFormateur(id);
        }
    };

    return (
        <div className="formateur-layout">
            <h1>Formateur Management</h1>
            <button onClick={handleAddFormateur} className="add-button">Add Formateur</button>
            <ul>
                {formateurs.map((formateur) => (
                    <li key={formateur.id} className="formateur-item">
                        <span>{formateur.fullName} - {formateur.country}</span>
                        <button
                            onClick={() => handleDeleteFormateur(formateur.id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
