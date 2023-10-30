import React from 'react'
import { Transition } from 'react-transition-group';

import homeBanner from '../assets/home_banner.jpg'

function Home() {
    return (
        <div className='bg-black h-calc' id='home'>
            <img src={homeBanner} alt="home_banner" className='h-full opacity-40 z-10' />
            <div className='absolute top-40 font-bold left-40 flex flex-col gap-2 animate-[slideup_1s_linear]'>
                <h3 className='text-white text-6xl'>Enhance Your</h3>
                <h3 className='text-white text-6xl'>Learning</h3>
                <h4 className='text-green-300 text-3xl'>START TO SUCCESS</h4>
                <p className='text-white text-xl'>Access To 50+ Courses from 100 Instructors<br></br>& Institutions</p>
            </div>
        </div >
    )
}

export default Home