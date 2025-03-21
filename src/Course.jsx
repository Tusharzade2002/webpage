import React from 'react'
import Herosection from './Views/Features/Herosection'
import Navbar from './Layout/Navbar'
import Ccards from './Views/Features/Ccards'
import Footer from './Layout/Footer'

function Course() {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Ccards/>
        <Footer />

    </div>
  )
}

export default Course