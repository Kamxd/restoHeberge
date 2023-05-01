import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';



const Menu = () => {
    const [categoryMenu, setCategoryMenu] = useState([]);

    useEffect(() => {
        getAllItem();
    }, []);
    //console.log(listmenu);

    const getAllItem = async () => {
        let responses = [
    {
        "idcategory": 1,
        "name": "Entrée",
        "imageCategory": null
    },
    {
        "idcategory": 2,
        "name": "Résistance",
        "imageCategory": null
    },
    {
        "idcategory": 3,
        "name": "Désert",
        "imageCategory": null
    },
    {
        "idcategory": 4,
        "name": "Boisson",
        "imageCategory": null
    }
]
        setCategoryMenu(responses);
    }
    console.log(categoryMenu);




    return (
        <div className='text-2xl'>


            <div className="flex justify-center gap-x-4">
                <div className="grid grid-cols-2 md:grid-cols-5">
                    <div className='mt-2 mr-2 md:mx-3 listCategory rounded px-2 border-2 border-white'>
                        <NavLink to="/menu/" >
                            <div className='text-center'>
                                All
                            </div>
                        </NavLink>
                    </div>
                    {
                        categoryMenu.map((liste) => (<NavLink to={`/menu/${liste.idcategory}`} key={liste.idcategory}>
                            <div className='mt-2 mr-2 md:mx-3 px-2 listCategory rounded border-2 border-white'>
                                <div className='text-center'>
                                    {liste.name}
                                </div>
                            </div>
                        </NavLink>))
                    }
                </div>



            </div>
            <>
                <Outlet />
            </>
            <div>

            </div>
        </div>
    );
};

export default Menu;