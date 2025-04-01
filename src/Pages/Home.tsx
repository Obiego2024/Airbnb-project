import React from 'react'
import HomeHero from '../Components/Home/HomeHero'
import Navbar from '../Components/Navbar/Navbar'
import MainFooter from '../Components/MainFooter'

function Home() {
  return (
    <div>
        <Navbar />
        <HomeHero />
        <MainFooter />
    </div>
  )
}

export default Home