import React, { useEffect } from 'react'
import { useState } from 'react';

import RestarentCard, { withPromtedLabel } from './RestarentCard.js';
import Shimmer from "./Shimmer.js"
import { Link } from 'react-router-dom';
import { withPromtedLabel } from './RestarentCard.js';



const Body = () => {
    const [Restarent, setRestarent] = useState([])
    const [search, setSearch] = useState('');
    let [filterResta, setFilterResta] = useState([]);
    let RestarentCardPromoted = withPromtedLabel(RestarentCard)

    useEffect(() => {
        getrestarent()
    }, [])

    const getrestarent = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();

        setRestarent(json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        setFilterResta(json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const topreated_restarent = () => {
        let toprated_restarent = Restarent.filter((res) => {
            if (res.info.avgRating > 4) {
                return true;
            } else {
                return false
            }

        });
        setFilterResta(toprated_restarent)
    }

    const handleFilterRestarent = () => {
        let f_restarent = Restarent.filter((res) => {
            if (res.info.name.includes(search)) {
                return true
            } else {
                return false
            }
        });

        setFilterResta(f_restarent)
    }


    return Restarent.length == 0 ? <div className='m-16'><Shimmer /></div> : (
        <div className=''>
            <div className=' container mt-28 flex justify-around  mb-10'>
                <div className='top_reated fixed top-28 left-20 p-4 bg-black text-white active:bg-slate-400'><button onClick={() => { topreated_restarent() }}>Top reated Reastarent</button></div>
                <div className='fixed top-28 right-28'><input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} className='search-input border-2 border-black rounded-lg p-3 ' />
                    <button className='search-button bg-black text-white p-3 active:bg-slate-400  rounded-lg' onClick={handleFilterRestarent}>Search</button></div>       </div>

            <div className='flex flex-wrap'>


                {
                    filterResta.map((res) => {
                        { console.log(res) }
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