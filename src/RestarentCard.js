import React from 'react'

const RestarentCard = (props) => {

    let { areaName, avgRating
        , cuisines, costForTwo,
        cloudinaryImageId,
        name
    } = props.res.info

    const { info: { aggregatedDiscountInfoV3 } } = props.res;
    return (
        <div className='m-5 w-72  hover:shadow-lg hover:border-2 hover-border-black hover:rounded-lg h-full p-4 '>

            <div className='relative'><div className=''> <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} className='image w-72 h-52 ' /></div>
                <div><h1 className='absolute top-44 left-20 text-black font-bold text-3xl bg-green-200 rounded-lg p-1'>{aggregatedDiscountInfoV3?.header}</h1></div>
            </div>
            <div className='card_detalis overflow-auto text-center my-5 '>
                <div>{name}</div>
                <div>{costForTwo}</div>

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