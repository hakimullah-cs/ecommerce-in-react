import React from 'react'
import HeroSec from '../../Components/HomeComponents/HeroSection/HeroSec'
import Services from '../../Components/HomeComponents/Services/Services'

const Home = () => {
  const data={
    name:"Hikers Store",
  }
  return (
   <>
    <HeroSec myData={data}/>
    <Services/>
   </>
  )
}

export default Home