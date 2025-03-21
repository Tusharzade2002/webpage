import React from 'react'
import Image from 'react-bootstrap/Image';
import conImage from '../../Assects/contact.jpeg'
function ConHero() {
  return (
    <div>
         <Image style={{height:"500px" ,width:"100%" ,objectFit:"cover"}} src={conImage} fluid />
    </div>
  )
}

export default ConHero