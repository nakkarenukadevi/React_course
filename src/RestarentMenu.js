import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestarentMenu = () => {
    let [resInfo, setResInfo] = useState(null)
    let { params
    } = useParams()
    useEffect(() => {
        feactMenu()
    }, []);
    const feactMenu = async () => {

        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=${par}&catalog_qa=undefined&submitAction=ENTER");
        let json = await data.json();

    }
    return (
        <div className='menu'>RestarentMenu
            <h1>name of the ReactDOM</h1>
            <h2>Menu</h2>

        </div>
    )
}

export default RestarentMenu