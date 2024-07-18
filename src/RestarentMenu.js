import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useRestaurantaMenu from './useRestaurantMenu';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from './Store/cartSlice';



const RestarentMenu = () => {



    let { resid } = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    let resInfo = useRestaurantaMenu(resid);
    let { text = "" } = resInfo?.cards[0].card?.card || ""
    let { cards = [] } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR || {}

    let category = cards.filter((filres) => {

        if (filres.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
            return true
        }
    })
    let dispatch = useDispatch()

    let { itemCards } = category?.card?.card
    console.log(itemCards)

    const handleaddCart = (info) => {
        let addcar = data.filter((cres) => {
            if (cres.info.id == info.id) {
                return true;
            } else false
        })

        dispatch(addtoCart(addcar))
    }

    return <>

        <div className='text-center mt-40'>
            <h1 className='text-bold text-3xl'>{text}{resid}</h1>
            <div className='mt-9'>
                {
                    category.map((r) => {

                        return <div >
                            <div className=' w-1/2  mx-auto border-2 border-gray-300 m-4' >
                                <div className="flex items-center justify-between px-4 py-3 bg-gray-200 cursor-pointer" onClick={toggleAccordion}>

                                    <h1>{r?.card?.card?.title}({r?.card?.card?.itemCards.length})</h1>
                                    <svg
                                        className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                                        />
                                    </svg>

                                </div>
                                {isOpen && (
                                    <div className="px-4 py-3">
                                        {r?.card?.card?.itemCards?.map((c) => {
                                            return <div className='border-2 border-gray-300 m-4 w-full flex justify-evenly items-center mx-auto  ' key={c?.card?.info?.id}>
                                                <div className=''>{c.card?.info?.name}</div>

                                                <div><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + c.card?.info?.imageId} alt="item" className='w-38 h-28' /></div>
                                                <div className='p-3 bg-black font-bold text-xl text-white active:bg-slate-500 rounded-lg' onClick={() => handleaddCart(c?.card?.info.id)}>Add+</div>

                                            </div>
                                        })}
                                    </div>
                                )}


                            </div>
                        </div>
                    })


                }
            </div>

        </div>

    </>
}

export default RestarentMenu