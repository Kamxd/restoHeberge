import React, { useState, useContext } from 'react';
import '../assets/style/Navigation.css';
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PanierContext } from './Pannier';



const Lemenu = () => {

    let [open, setOpen] = useState(false);

    let { panier } = useContext(PanierContext);

    const total = panier.reduce((acc, item) => {
        return acc + item.count;
      }, 0);

    return (
        <div>
            <div className='mx-16 pt-4'>
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <div className='w-full md:mb-16'>
                            <div className=''>
                                <div className='w-full fixed-top left-0 '>
                                    <div className=' md:flex items-center justify-between  py-4 md:px-10 px-7'>
                                        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white md:text-xl'>

                                            Delicious
                                        </div>

                                        <div className='ml-2 ShopStyle bg-opacity-100 rounded bg-cover'>
                                            <NavLink to="/commande">
                                                <div className='AchatIcon text-lg font-bold text-white md:text-xl'>
                                                    <span className='relative'>
                                                        <span className=''>
                                                            <HiOutlineShoppingBag />
                                                        </span>
                                                        <span className=' badge absolute -top-4 -right-1/3 text-yellow-400 mt-1 mr-1 '> { total }</span>
                                                    </span>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className='text-xl text-white absolute right-8 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)}>
                                            {open ? <BsX /> : <BsList />}

                                        </div>

                                        <div className={`${open ? '' : ''}`}>
                                            <ul className={`  text-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 
                            w-full md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${open ? 'top-20 navList listGroup' : 'top-[-700px] navList'}`}>
                                                <NavLink to="/"><li className='text-lg md:text-xl md:my-0 my-7 ml-4 mr-2'><span className={`${open ? '' : 'text-white hover:text-yellow-500 duration-500'}`}> Home </span></li></NavLink>
                                                <NavLink to="/menu"><li className='text-lg md:text-xl md:my-0 my-7 mr-2'><span className={`${open ? '' : 'text-white hover:text-yellow-500 duration-500'}`}> Menu </span></li></NavLink>
                                                <NavLink to="/specials"><li className='text-lg md:text-xl md:my-0 my-7 mr-2'><span className={`${open ? '' : 'text-white hover:text-yellow-500 duration-500'}`}> Specials </span></li></NavLink>
                                                <NavLink to="/events"><li className='text-lg md:text-xl md:my-0 my-7 mr-2'><span className={`${open ? '' : 'text-white hover:text-yellow-500 duration-500'}`}> Events </span></li></NavLink>
                                                <NavLink to="/gallery"><li className='text-lg md:text-xl md:my-0 my-7 mr-2'><span className={`${open ? '' : 'text-white hover:text-yellow-500 duration-500'}`}> Gallery </span></li></NavLink>

                                            </ul>
                                        </div>


                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                    <div></div>
                </div>



            </div>
        </div>
    );
};

export default Lemenu;