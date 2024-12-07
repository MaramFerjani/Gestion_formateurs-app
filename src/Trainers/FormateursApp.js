import { createContext, useState } from "react";
import FormateursLayout from "./FormateursLayout";
import "./FormateursApp.css";

export const FormateursContext = createContext({
    formateurs: [],
    lastId: 0,
    addFormateur: () => null,
    updateFormateur: () => null,
    deleteFormateur: () => null,
});

export default function FormateursApp() {
    const [formateurs, setFormateurs] = useState([
        { id: 1, fullName: "Ali Kamel", country: "Tunisia" },
        { id: 2, fullName: "Sarah Ben", country: "Morocco" },
    ]);
    const [lastId, setLastId] = useState(formateurs.length);

    const addFormateur = (formateur) => {
        setFormateurs((prevState) => [...prevState, { id: lastId + 1, ...formateur }]);
        setLastId((prevState) => prevState + 1);
    };

    const deleteFormateur = (id) => {
        setFormateurs((prevState) => prevState.filter((formateur) => formateur.id !== id));
    };

    const updateFormateur = (updatedFormateur) => {
        setFormateurs((prevState) =>
            prevState.map((formateur) =>
                formateur.id === updatedFormateur.id ? updatedFormateur : formateur
            )
        );
    };

    return (
        <FormateursContext.Provider
            value={{
                formateurs,
                actions: {
                    addFormateur,
                    deleteFormateur,
                    updateFormateur,
                },
            }}
        >
            <FormateursLayout />
        </FormateursContext.Provider>
    );
}
