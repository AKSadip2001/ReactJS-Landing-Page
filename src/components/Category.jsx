import React from 'react'

import CategoryCard from './CategoryCard'

import { BsVectorPen } from 'react-icons/bs'
import { TiHtml5 } from 'react-icons/ti'
import { TbMicrophone2 } from 'react-icons/tb'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { AiOutlineCamera } from 'react-icons/Ai'
import { BiData } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'

function Category() {
    return (
        <div className='w-full bg-[#F0FBF7] py-20' id='categories'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-10'>
                <h1 className='md:leading-[72px] text-3xl font-bold text-[#20B486]'>Categories</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  py-12 md:gap-4 gap-1'>
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Business'} />
                    <CategoryCard icons={<AiOutlineCamera size={30} />} title={'Photography'} />
                    <CategoryCard icons={<BiData size={30} />} title={'Data Science'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Finance'} />
                    <CategoryCard icons={<FaUniversity size={30} />} title={'Teaching'} />




                </div>


            </div>
        </div>
    )
}

export default Category