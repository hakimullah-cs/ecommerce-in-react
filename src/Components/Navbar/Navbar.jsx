import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import {data} from '../../Data/Data';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BiMenuAltRight} from 'react-icons/bi';

const Navbar = () => {
  return (
    <header className='w-full header bg-white px-3'>
      <nav className='px-3 m-auto h-[6rem] max-w-[1240px] w-full flex justify-between items-center'>
       <div className='w-[6rem] h-[5rem]'>
         <img src={logo} alt='Main-Logo' className='w-full h-full'/>
       </div>
       <ul className='flex'>
       {
        data.Navbar.map((navlink)=>{
          return (
            <li key={navlink.id} className='mr-[2.5rem]'>
              <Link to={navlink.link} className='text-xl font-bold  uppercase hover:text-[orange] duration-300'>{navlink.linktext}</Link>
            </li>
          )
        })
       }
       </ul>
       <div className='flex text-2xl gap-5 items-center'>
        <Link to={'/login'} className='uppercase bg-[orange] text-white font-semibold py-3 px-4 rounded-md hover:bg-white duration-300 border hover:text-[orange]'>Login</Link>
        <div className='flex font-semibold relative'>
          <AiOutlineShoppingCart className='text-5xl'/>
          <sup className='text-[2rem] absolute top-[-5px] right-[-10px]'>0</sup>
        </div>
        <BiMenuAltRight className='text-5xl md:hidden block '/>
       </div>
      </nav>
    </header>
  )
}

export default Navbar