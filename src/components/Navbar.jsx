import React, { useState } from 'react'
import { HashLink } from "react-router-hash-link";

import { AiFillLock, AiOutlineClose } from 'react-icons/Ai';
import { GiHamburgerMenu } from 'react-icons/Gi';


function Navbar() {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    return (
        <div className='w-full h-[70px] bg-white border-b sticky top-0 z-50'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
                <h3 className='font-bold text-2xl text-gray-800 shadow-lg animate-pulse'>Nitix</h3>

                <div className='hidden md:flex items-center '>
                    <ul className='flex gap-4 font-semibold'>
                        <HashLink to='#home' smooth className='cursor-pointer'>Home</HashLink>
                        <HashLink to='#courses' smooth className='cursor-pointer'>Courses</HashLink>
                        <HashLink to='#companies' smooth className='cursor-pointer'>Partners</HashLink>
                        <HashLink to='#categories' smooth className='cursor-pointer'>Categories</HashLink>
                        <HashLink to='#feedback' smooth className='cursor-pointer'>Feedback</HashLink>
                        <HashLink to='#subscribe' smooth className='cursor-pointer'>Subscribe</HashLink>
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                        {/* <img src={lock} /> */}
                        <AiFillLock />
                        Login
                    </button>
                    <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Sign Up</button>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    {toggle ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>
            </div>

            <div className={toggle ? 'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
                <ul className='font-semibold'>
                    <HashLink to='#home' smooth className='p-4 hover:bg-gray-100'>Home</HashLink>
                    <HashLink to='#courses' smooth className='p-4 hover:bg-gray-100'>Courses</HashLink>
                    <HashLink to='#companies' smooth className='p-4 hover:bg-gray-100'>Partners</HashLink>
                    <HashLink to='#categories' smooth className='p-4 hover:bg-gray-100'>Categories</HashLink>
                    <HashLink to='#feedback' smooth className='p-4 hover:bg-gray-100'>Feedback</HashLink>
                    <HashLink to='#subscribe' smooth className='p-4 hover:bg-gray-100'>Subscribe</HashLink>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                            <AiFillLock />
                            Login
                        </button>
                        <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar