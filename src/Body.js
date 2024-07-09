import React, { useEffect } from 'react'
import { useState } from 'react';
import { RestarentData } from "./utilis/constants.js";
import RestarentCard from './RestarentCard.js';
import Shimmer from "./Shimmer.js"
import { Link } from 'react-router-dom';



const Body = () => {
    const [Restarent, setRestarent] = useState([])
    const [search, setSearch] = useState('');
    let [filterResta, setFilterResta] = useState([]);


    useEffect(() => {
        getrestarent()
    }, [])

    const getrestarent = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        console.log(json)
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
        console.log(f_restarent)
        setFilterResta(f_restarent)
    }


    return Restarent.length == 0 ? <div><Shimmer /></div> : (
        <>
            <div className='top-container'>
                <div><button className='top_reated' onClick={() => { topreated_restarent() }}>Top reated Reastarent</button></div>
                <div><input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} className='search-input' />
                    <button className='search-button' onClick={handleFilterRestarent}>Search</button></div></div>
            <div className='restarentCards'>
                dlfa
                {
                    filterResta.map((res) => {
                        return <div key={res.info.id} >
                            {console.log(res.info)}
                            <Link to={'/restarentmenu/' + res.info.id}><RestarentCard res={res} /></Link>
                        </div>
                    })
                }

            </div >
        </>
    )
}

export default Body