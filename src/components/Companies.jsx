import React from 'react'

function Companies() {
    return (
        <div className='w-full bg-white py-[100px]' id="companies">
            <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 data-aos="fade-right" data-aos-duration="2000" className='text-center text-2xl font-bold text-[#536E96]'>Companies We Are Partnering</h1>
                <p data-aos="fade-left" data-aos-duration="2000" className='text-center  text-[#536E96] text-xl'>Leading companies use the same courses to help employees keep their skills fresh.</p>
                <div data-aos="fade-up" data-aos-duration="2000" className='flex justify-center py-8 md:gap-8 '>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                        <img src={"https://interactivecares-courses.com/wp-content/uploads/2021/02/13.png"} />
                        <img src={"https://interactivecares-courses.com/wp-content/uploads/2021/02/12.png"} />
                        <img src={"https://interactivecares-courses.com/wp-content/uploads/2021/02/11.png"} />
                        <img src={"https://interactivecares-courses.com/wp-content/uploads/2021/02/9.png"} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Companies