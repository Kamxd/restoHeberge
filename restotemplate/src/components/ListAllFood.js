import React, { useState, useEffect, useContext } from 'react';
import met3 from '../assets/img/met3.png';
import { PanierContext } from './Pannier';


const ListMenu = () => {
    const [itemMenu, setItemMenu] = useState([]);

    useEffect(() => {
        getAllItem();
    }, []);
    //console.log(listmenu);

    const getAllItem = async () => {
        let responses = [
            {
                "iditem": 5,
                "title": "Hors d'oeuvre",
                "description": "Une entrée qui se respecte",
                "file": "Photo",
                "itemPrice": 1500,
                "count": 0,
                "type": null,
                "category_idcategory": 1
            },
            {
                "iditem": 1,
                "title": "Petit-Pois",
                "description": "Une soupe au petit pois",
                "file": "photo",
                "itemPrice": 2500,
                "count": 0,
                "type": null,
                "category_idcategory": 1
            },
            {
                "iditem": 8,
                "title": "Alloco",
                "description": "Banane frit",
                "file": "Photo",
                "itemPrice": 700,
                "count": 0,
                "type": null,
                "category_idcategory": 2
            },
            {
                "iditem": 7,
                "title": "Igname Pilée",
                "description": "Igname pilée avec sauce d'arachide",
                "file": "Photo",
                "itemPrice": 1000,
                "count": 0,
                "type": null,
                "category_idcategory": 2
            },
            {
                "iditem": 2,
                "title": "Riz Blanc",
                "description": "Du riz blanc + une sauce tomate + Poisson/Viande ",
                "file": "Photo",
                "itemPrice": 1500,
                "count": 0,
                "type": null,
                "category_idcategory": 2
            },
            {
                "iditem": 6,
                "title": "Frite au Poulets",
                "description": "Un plat de frite avec un poulet",
                "file": "Photo",
                "itemPrice": 2500,
                "count": 0,
                "type": null,
                "category_idcategory": 2
            },
            {
                "iditem": 3,
                "title": "Gâteau au chocolat",
                "description": "Un gâteau fait avec du chocolat",
                "file": "Photo",
                "itemPrice": 1000,
                "count": 0,
                "type": null,
                "category_idcategory": 3
            },
            {
                "iditem": 4,
                "title": "Coca-Cola",
                "description": "Une boisson fraîche",
                "file": "Photo",
                "itemPrice": 800,
                "count": 0,
                "type": null,
                "category_idcategory": 4
            }
        ]
        setItemMenu(responses)
    }
    console.log(itemMenu);

    

    const {  ajouterAuPanier } = useContext(PanierContext);  

    

    



    return (

        <div>
            <div className='mt-8 mx-12 overflow-auto HauteurContent pb-8 bg-white  bg-opacity-60 rounded-lg'>
                <div className='mt-2 pt-8'>
                    <div className="place-items-center grid grid-cols-1 gap-4 md:grid-cols-3">
                        {
                            itemMenu.map((liste) => (
                                <div key={liste.iditem} className='bg-black bg-opacity-80 rounded-lg mb-8'>
                                    <div className=''>
                                        <img className='ImageSize' src={met3} alt={liste.title} />
                                    </div>
                                    <div className='text-center mt-4'>
                                        {liste.title}
                                    </div>
                                    <div className='text-center mt-4 text-xl'>
                                        {liste.itemPrice + "  XOF"}
                                    </div>
                                    <div className='text-center my-4  rounded'>
                                        <button className=' CommandBtn px-3 rounded-md' onClick={() => {ajouterAuPanier(liste); } }>
                                            Commander
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ListMenu;