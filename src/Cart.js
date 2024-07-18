import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from './Store/cartSlice';
const Cart = () => {
    let data = useSelector((state) => state.cart.cartItems);
    console.log(data)
    let dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())

    };
    const handledeleteItems = (id) => {
        let removedItem = data.filter((item) => {
            if (item.id == id) {
                return false
            } else return true
        });
        dispatch(removeItem(removedItem))

    }

    return data.length == 0 ? <h1 className='mt-40 text-center font-sans text-bold text-4xl text-red-700'>cart is empth</h1> : <div className='mt-40'>

        <div className='text-center'><button className='p-4 bg-black text-white roounder-lg active:bg-gray-300 ' onClick={handleClearCart}>Clear Cart</button></div>
        <h1>{data.map((r) => {
            return <div className='border-2 border-gray-300 m-4 w-full flex justify-evenly items-center mx-auto  ' key={r.id}>
                <div className=''>{r.name}</div>

                <div><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + r.imageId} alt="item" className='w-38 h-28' /></div>

                <div><button className='p-4 bg-black text-white roounder-lg active:bg-gray-300 ' onClick={() => handledeleteItems(r.id)}>delete</button></div>
            </div>
        })}</h1>

    </div>


}

export default Cart