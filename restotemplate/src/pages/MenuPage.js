import React from 'react';
import MenuContent from '../components/MenuContent';
import Navigation from '../components/Navigation';
import '../assets/style/Menupage.css';
import { NavLink } from 'react-router-dom';


const MenuPage = () => {
    return (


        <div className='MenuSection hero'>
            <div className="flex flex-col ">
                <div className=' '>
                    <Navigation />
                </div>
                <div className='text-white mt-8'>
                    <MenuContent />
                </div>
                <div className='text-white text-2xl '>
                    <NavLink to='/commande' className='absolute right-0 mr-12 mt-12 rounded px-4 py-1 border-2 ConfirmBtn'>
                        <div className=''>
                            Confirmez !
                        </div>
                    </NavLink>

                </div>

            </div>
        </div>
    );
};

export default MenuPage;