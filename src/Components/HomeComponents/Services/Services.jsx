import React from 'react'
import ServiceCard from './ServiceCard'
import {data} from '../../../Data/Data';

const Services = () => {
  return (
   <div className='wrapper pb-5'>
     <div className='md:px-0 px-5 sm:ms-[11rem] ms-[9rem]'>
      <div className='font-semibold text-[#9ba5ab] mb-1'>CHECK NOW!</div>
      <h3 className='text-3xl font-semibold mb-5'>Our Feature Services</h3>
     </div>
     <div className='flex justify-center gap-[1.5rem] md:flex-nowrap flex-wrap p-3'>
      {
        data.Services.map(service=>{
          return (
            <ServiceCard prop={service} key={service.id}/>
          )
        })
      }
     </div>
   </div>
  )
}

export default Services