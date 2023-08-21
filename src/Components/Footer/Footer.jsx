import React from 'react';
import './Footer.css';
import {BiLogoLinkedin,BiLogoGithub,BiLogoTwitter} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='footer bg-[#212528] text-white pt-[4rem] pb-5 px-5'>
      <div className='flex justify-center items-center gap-[2rem] flex-wrap mb-5'>
        <div className='our-bio sm:max-w-[300px] w-full  p-3'>
          <h3 className='text-3xl font-semibold mb-3'>Hakim Ullah</h3>
          <p className='font-semibold text-justify'>Creative and self-starting Front-End Developer with 3years experience building stable eCommerce websites and apps in fast-paced, collaborative environment</p>
        </div>
        <div className='our-bio sm:max-w-[350px] w-full  p-3'>
          <p className='text-xl font-semibold mb-5'>Subscribe to get important updates</p>
          <form>
            <div>
              <input type='email' name='email' placeholder='Subscribe' className='-none outline-none py-3 px-3'/>
              <button type='submit' className='p-3 bg-[orange] font-semibold'>Subscribe</button>
            </div>
          </form>
        </div>
        <div className='sm:max-w-[300px] w-full p-3'>
          <h3 className='text-2xl font-semibold mb-5'>About Us</h3>
          <div className='flex gap-3 text-2xl'>
          <div className=' p-3 rounded-full text-3xl border'>
          <BiLogoLinkedin/>
          </div>
          <div className=' p-3 rounded-full text-3xl border'>

          <BiLogoGithub/>
          </div>
          <div className=' p-3 rounded-full text-3xl border'>

          <BiLogoTwitter/>
          </div>
          </div>
        </div>
        <div className='sm:max-w-[200]'>
          <h3 className='text-2xl font-semibold mb-3'>Call US:</h3>
          <p className='font-semibold'>+923089487568</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='text-2xl'>&#169; 2023 <span className='font-semibold'>Hakim Ullah</span> All rights reserved.</div>

      </div>
    </footer>
  )
}

export default Footer