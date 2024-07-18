import React, { useEffect } from 'react'
import { useState } from 'react';

import RestarentCard from './RestarentCard.js';
import Shimmer from "./Shimmer.js"
import { Link } from 'react-router-dom';
import { withPromtedLabel } from './RestarentCard.js';
import { useDispatch, useSelector } from 'react-redux';
import { inistialData } from './Store/cartSlice.js';


const Body = () => {
    let InistialStoreData = useSelector((state) => state.cart.items)
    const [Restarent, setRestarent] = useState([])
    const [search, setSearch] = useState('');
    let [filterResta, setFilterResta] = useState([]);


    useEffect(() => {
        getrestarent()
    }, [])

    let dispatch = useDispatch();

    const getrestarent = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();

        dispatch(inistialData(json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants))

    }

    const topreated_restarent = () => {
        let toprated_restarent = inistialData.filter((res) => {
            if (res.info.avgRating > 4) {
                return true;
            } else {
                return false
            }

        });
        dispatch(inistialData(toprated_restaren))
    }

    const handleFilterRestarent = () => {
        let f_restarent = inistialData.filter((res) => {
            if (res.info.name.includes(search)) {
                return true
            } else {
                return false
            }
        });

        dispatch(inistialData(f_restarent))
    }


    return InistialStoreData == 0 ? <div className='m-16'><Shimmer /></div> : (
        <div className=''>
            <div className=' container mt-28 flex justify-around  mb-10'>
                <div className='top_reated fixed top-28 left-20 p-4 bg-black text-white active:bg-slate-400'><button onClick={() => { topreated_restarent() }}>Top reated Reastarent</button></div>
                <div className='fixed top-28 right-28'><input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} className='search-input border-2 border-black rounded-lg p-3 ' name="Search" data-testid="searchInput" />
                    <button className='search-button bg-black text-white p-3 active:bg-slate-400  rounded-lg' onClick={handleFilterRestarent}>Search</button></div>       </div>

            <div className='flex flex-wrap'>


                {
                    InistialStoreData.map((res) => {

                        return <div key={res.info.id} className='mt-20 ' >

                            <Link to={'/restarentmenu/' + res.info.id}>

                                <RestarentCard res={res} /></Link>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Body