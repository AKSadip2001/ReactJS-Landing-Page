import React from 'react'
import Slider from "react-slick";
import FeedbackCard from './FeedBackCard';

function FeedBack() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className='w-full bg-white py-20' id='feedback'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-10'>
                <div className='py-4'>
                    <h1 className='py-3 text-3xl text-[#20B486] font-bold'>Feedback</h1>
                </div>

                <Slider {...settings} >

                    <FeedbackCard image={"https://interactivecares-courses.com/wp-content/uploads/2021/05/Interactive-Cares-Testimonial-2.png"} />
                    <FeedbackCard image={"https://interactivecares-courses.com/wp-content/uploads/2021/05/Interactive-Cares-Testimonial-5.png"} />
                    <FeedbackCard image={"https://interactivecares-courses.com/wp-content/uploads/2021/05/Interactive-Cares-Testimonial-1.png"} />

                </Slider>

            </div>

        </div>
    )
}

export default FeedBack