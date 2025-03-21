import React from 'react'
import Image from 'react-bootstrap/Image';
import Bimage from '../../Assects/Course/Bootcamp.jpg'

function BHero() {
  return (
    <div>
        <Image style={{height:"500px" ,width:"100%" ,objectFit:"cover"}} src={Bimage} fluid />
    </div>
  )
}

export default BHero