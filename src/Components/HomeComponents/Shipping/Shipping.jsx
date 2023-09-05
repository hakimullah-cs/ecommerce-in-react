import React from 'react';
import {FaShuttleVan,FaPlaceOfWorship} from 'react-icons/fa';
import {RiSecurePaymentFill} from 'react-icons/ri';
import {FcMoneyTransfer} from 'react-icons/fc';

const Shipping = () => {
  return (
    <div className='mt-[3rem] mb-[4rem] border-red-700 p-5 flex justify-center gap-[3rem] flex-wrap md:flex-nowrap'>
         <div className='w-[250px] h-[170px] border p-3 bg-[#eee] rounded-md shadow-md flex justify-center items-center flex-col'>
                <div className='icon w-[30px] h-[30px] mb-4 bg-white flex justify-center items-center rounded-full'>
                <FaShuttleVan className='text-[#3b5998] text-2xl'/>
                </div>
                <p className='text-[#212528] text-xl'>Super Fast & Free Delivery</p>
         </div>
         <div className='w-[250px] h-[170px] '>
            <div className='w-full shadow-lg h-[80px] mb-5 px-3 rounded-md bg-[#eee] flex items-center gap-4'>
            <div className='icon w-[30px] h-[30px]  bg-white flex justify-center items-center rounded-full'>
                <FaPlaceOfWorship className='text-[#3b5998] text-2xl'/>
                </div>
                <p className='text-[#212528] text-xl'>Non-Contact Shipping</p>
            </div>
            <div className='w-full shadow-lg h-[80px] px-3 rounded-md bg-[#eee] flex items-center gap-4'>
            <div className='icon w-[30px] h-[30px]  bg-white flex justify-center items-center rounded-full'>
                <FcMoneyTransfer className='text-[#3b5998] text-2xl'/>
                </div>
                <p className='text-[#212528] text-xl'>Money-back Guranteed</p>
            </div>
         </div>
         <div className='w-[250px] h-[170px] rounded-md border bg-[#eee] p-3 flex justify-center items-center flex-col'>
         <div className='icon w-[30px] h-[30px] mb-4 bg-white flex justify-center items-center rounded-full '>
                <RiSecurePaymentFill className='text-[#3b5998] text-2xl'/>
                </div>
                <p className='text-[#212528] text-xl'>Super Secure Payment System</p>
         </div>
    </div>
  )
}

export default Shipping