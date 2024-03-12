import React from 'react'
import HeroCarousel from '../Components/HeroCarousel'
import WhoWeAre from '../Components/WhoWeAre'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'


function HomePage() {
  return (
    <div className='Home_Page'>
     <Header />
     <HeroCarousel />
     <Main />
     <WhoWeAre />
     <Footer />

    </div>
  )
}

export default HomePage