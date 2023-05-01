import React from 'react';
import CommandeContent from '../components/CommandeContent';
import Navigation from '../components/Navigation';
import '../assets/style/Menupage.css';


const Commande = () => {
    return (
        <div className='MenuSection hero'>
            <div className="flex flex-col ">
                <div className=' '>
                    <Navigation />
                </div>
                <div className='text-white mt-8'>
                    <CommandeContent />
                </div>
                


            </div>
        </div>
    );
};

export default Commande;