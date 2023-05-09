import React, { useContext, useState } from 'react';
import { PanierContext } from './Pannier';

const CommandeContent = () => {


    const { panier, retirerDuPanier } = useContext(PanierContext);

    const [tableNumber, setTableNumber] = useState([]);

    function handleTableNumberChange(event) {
        setTableNumber(event.target.value);
    }

    //console.log(tableNumber);


    return (
        <div>

            <div className="flex justify-center mt-16 md:mt-0">
                <div></div>

                <div>
                    <input className="text-black mb-8 w-96 px-3 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="number" name="quantite" min="1" max="10" placeholder="Entrer le numéro de votre table" onChange={handleTableNumberChange} />

                    <div className='text-xl overflow-x-auto'>
                        <table className="table-fixed mx-auto divide-x-30  ">
                            <thead>
                                <tr>
                                    <th className="w-1/2 px-5 ">Commande</th>
                                    <th className="w-1/4 px-5 ">Nombre</th>
                                    <th className="w-1/4 ..."></th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {panier.map((produit,index) => (
                                    <tr key={index} className=''>
                                        <td className="px-5 border border-l-2 border-gray-300">{produit.title}</td>
                                        <td className="px-5  border border-gray-300 text-center">{produit.count}</td>
                                        <td className='  border border-gray-300'><button style={{
                                            background: ''
                                        }} onClick={() => retirerDuPanier(produit)}
                                            className='my-2 ml-2 px-1  border rounded'>Retirer</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='text-white text-2xl '>
                        <button className='mt-12 rounded px-4 py-1 border-2 CommandBtn'>Validez !</button>
                    </div>
                </div>

                <div></div>
            </div>









        </div>
    );
};

export default CommandeContent;
