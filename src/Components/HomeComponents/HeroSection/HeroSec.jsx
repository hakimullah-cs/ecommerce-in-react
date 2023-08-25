import React from 'react';
import img from '../../../assets/banner.PNG';
import { Link } from 'react-router-dom';

const HeroSec = ({myData}) => {
  return (
    <div className='wrapper p-5'>
        <div className='flex border p-2 justify-center items-center gap-5 md:flex-nowrap flex-wrap '>
            <div className='md:w-[30rem] w-full p-3'>
                <div className='font-bold text-[#9ba5ab] mb-1'>WELCOME TO</div>
                <h3 className='text-5xl font-bold mb-3'>{myData.name}</h3>
                <p className='text-[#777] font-semibold text-justify mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <Link to={'/'} className='bg-[orange] text-white py-3 px-3 font-semibold text-xl rounded-sm hover:bg-[white] duration-300 hover:text-black shadow-lg border border-[orange]'>Shop Now</Link>
            </div>
            <div className='md:w-[35rem] w-full'>
                <img src={img} alt='banner' className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSec