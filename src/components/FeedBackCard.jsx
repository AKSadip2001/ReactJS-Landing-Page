import React from 'react'

function FeedBackCard({ image }) {
    return (
        <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
            <img src={image} alt="feedback" />
        </div>
    )
}

export default FeedBackCard