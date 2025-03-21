import React from 'react'
import HeroSection from './Layout/HeroSection';
import Navbar from './Layout/Navbar';
import Cards from './Views/Cards';
import Card1 from './Views/Card1';
import Card3 from './Views/Card3';
import Footer from './Layout/Footer';
import Advantage from './Views/Advantage';
import Domain from './Views/Domain';
function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Domain/>
      <Advantage/>
      <Cards />
      <Card1/>
      <Card3/>
      <Footer/> 
    </div>
  )
}

export default Home
