import React, { useState } from 'react';
import { PanierContext } from './Pannier';

const PannierProvider = ({ children }) => {


    const [panier, setPanier] = useState([]);



    const ajouterAuPanier = async (produit) => {
        const index = panier.findIndex((item) => item.iditem === produit.iditem);
        if (index !== -1) {
            const newPanier = [...panier];
            newPanier[index].count += 1;
            setPanier(newPanier);
        } else {
            const newProduit = { ...produit, count: 1 };
            setPanier([...panier, newProduit]);
        }
        await afficherPannier();
    };

    const retirerDuPanier = async (produit) => {
        const index = panier.findIndex(p => p.iditem === produit.iditem);
        if (index !== -1) {
            const updatedPanier = [...panier];
            updatedPanier[index].count -= 1;
            if (updatedPanier[index].count === 0) {
                updatedPanier.splice(index, 1);
            }
            setPanier(updatedPanier);
        }
    };


    const afficherPannier = async () => {
        await console.log('le panier est composé de :', panier);
    }

    return (
        <PanierContext.Provider value={{ panier, ajouterAuPanier, retirerDuPanier }}>
            {children}
        </PanierContext.Provider>
    );
};

export default PannierProvider;