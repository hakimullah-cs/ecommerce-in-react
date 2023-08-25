import React from 'react'
import HeroSec from '../../Components/HomeComponents/HeroSection/HeroSec'

const Home = () => {
  const data={
    name:"Hikers Store",
  }
  return (
   <>
    <HeroSec myData={data}/>
   </>
  )
}

export default Home