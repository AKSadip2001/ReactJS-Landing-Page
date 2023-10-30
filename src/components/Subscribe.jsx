import React from 'react'
import img from '../assets/supported_partners.png'

function Subscribe() {
    return (
        <>
            <div className='w-full bg-[#082847] py-[100px]' id='subscribe'>
                <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0 flex flex-col gap-3 items-center'>
                    <h1 className=' text-3xl font-bold text-white'>Subscribe to us</h1>
                    <p className=' text-white text-xl'>Subscribe to our newsletter</p>
                    <div className='flex flex-wrap justify-center gap-5'>
                        <input type='text' placeholder='Email' className='p-3 rounded-md' />
                        <button className='p-3 font-bold bg-green-400 rounded-md text-white'>Subscribe Now</button>
                    </div>
                </div>

            </div>
            <img src={img} alt="supported_by" />
        </>
    )
}

export default Subscribe