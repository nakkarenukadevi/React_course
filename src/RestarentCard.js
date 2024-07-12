import React from 'react'

const RestarentCard = (props) => {

    let { areaName, avgRating
        , cuisines, costForTwo,
        cloudinaryImageId,
        name
    } = props.res.info

    return (
        <div className='m-5 w-72  shadow-lg rounded-lg h-full p-4 bg-slate-300'>
            <div className='flex justify-center'> <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} className='image w-72 h-52 ' /></div>
            <div className='card_detalis overflow-auto text-center'>
                <div>{name}</div>
                <div>{costForTwo}</div>
                <div>{cuisines.join(",")}</div>
                <div>{areaName}</div>
                <div>{avgRating}</div>



            </div>

        </div>
    )
}
export const withPromtedLabel = (RestarentCard) => {
    return () => {
        return (
            <div>
                <lable>Promoted</lable>
                <RestarentCard />
            </div>

        )
    }
}

export default RestarentCard