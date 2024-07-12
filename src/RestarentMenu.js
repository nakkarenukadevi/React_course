import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantaMenu from './useRestaurantMenu';

const RestarentMenu = () => {

    let { resid } = useParams();


    let resInfo = useRestaurantaMenu(resid);



    return <>

    </>
}

export default RestarentMenu