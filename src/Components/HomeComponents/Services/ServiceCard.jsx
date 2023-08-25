import React from 'react'

const ServiceCard = ({prop}) => {
  return (
    <div className='md:w-[280px] w-[300px]  overflow-hidden pb-3 drop-shadow-lg relative'>
    <div className='w-full h-[150px] border mb-4'>
      <img src={prop.image} alt='Mobile-Phone' className='w-full h-full'/>
    </div>
    <div className='flex justify-between px-3 font-bold text-[#777] text-xl'>
      <span>{prop.name}</span>
      <span>RS: {prop.price}</span>
    </div>
    <button className='bg-[#eee] font-semibold text-[#212528] rounded-full py-2 px-5 w-[100px] absolute top-1 right-1'>{prop.title}</button>
    </div>
  )
}

export default ServiceCard