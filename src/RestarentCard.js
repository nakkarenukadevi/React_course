import React from 'react'

const RestarentCard = (props) => {
    console.log(props);
    let { id, areaName, avgRating
        , cuisines, costForTwo,
        cloudinaryImageId,
        name



    } = props.res.info
    return (
        <div className='card'>
            <div className='imge_div'> <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} className='image' /></div>
            <div className='card_detalis'>
                <div>{name}</div>
                <div>{costForTwo}</div>
                <div>{cuisines.join(",")}</div>
                <div>{areaName}</div>
                <div>{avgRating}</div>
            </div>

        </div>
    )
}

export default RestarentCard