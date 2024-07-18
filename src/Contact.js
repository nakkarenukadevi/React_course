import React from 'react'

const Contact = () => {
    return (
        <div className='mt-40'>
            <h1 className='p-4 m-4 text-center'>contact Us</h1>
            <from>
                <input type="text" className='border-2 border-gray-400 p-2 m-2' placeholder='name' />
                <input type="text" className='border-2 border-gray-400 p-2 m-2' placeholder='massage' />
                <button className='p-4 bg-black text-white'>Submit</button>
            </from>

        </div>
    )
}

export default Contact