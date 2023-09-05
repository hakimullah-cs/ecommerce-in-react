import React from 'react'
import HeroSec from '../../Components/HomeComponents/HeroSection/HeroSec'
import Services from '../../Components/HomeComponents/Services/Services'
import Shipping from '../../Components/HomeComponents/Shipping/Shipping'

const Home = () => {
  const data={
    name:"Hikers Store",
  }
  return (
   <>
    <HeroSec myData={data}/>
    <Services/>
    <Shipping/>
   </>
  )
}

export default Home