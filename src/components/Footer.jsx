import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-3 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-10'>

                <div className='col-span-2 md:col-span-1'>
                    <h3 className='font-bold text-2xl text-gray-700'>Nitix</h3>
                    <h3 className='text-2xl font-bold mt-5'>Contact Us</h3>
                    <h3 className='py-2 text-[#6D737A]'>Call : +88017777777</h3>
                    <h3 className='py-2 text-[#6D737A]'>Banani 11 <br></br> Dhaka, Bangladesh</h3>
                    <h3 className='py-2 text-[#363A3D]'>Email: nitix@email.com</h3>
                    <div className='flex gap-4 py-4'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookF size={25} style={{ color: '#4DC39E' }} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={25} style={{ color: '#4DC39E' }} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={25} style={{ color: '#4DC39E' }} /></div>

                    </div>

                </div>

                <div>
                    <h3 className='text-2xl font-bold'>Explore</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Home</li>
                        <li className='py-2'>Course</li>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Categories</li>
                        <li className='py-2'>Feedback</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-2xl font-bold'>Category</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Design</li>
                        <li className='py-2'>Development</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Business</li>
                        <li className='py-2'>Photography</li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Footer