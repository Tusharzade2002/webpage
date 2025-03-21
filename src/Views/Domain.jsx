import React from 'react'
import Business from '../Assects/business.png'
import Development from '../Assects/development.png'
import Marketing from '../Assects/marketing.png'
import Fainane from '../Assects/fianance.png'
import design from '../Assects/design.png'
import photo from '../Assects/photo.png'
import office from '../Assects/office.png'
function Domain() {
  return (
    <div class="d-flex d-block justify-content-center my-5">
        <div class="mx-5">
            <img style={{height:"50px" }} src={Business} alt='..' />
            <p class="mt-2">Business</p>
        </div>
        <div class="mx-5">
            <img style={{height:"50px"}} src={Development} alt='..' />
            <p class="mt-2">Development</p>
        </div>
        <div class="mx-5">
            <img style={{height:"50px"}} src={Marketing} alt='..' />
            <p class="mt-2">Business</p>
        </div>
        <div class="mx-5">
            <img style={{height:"50px"}} src={Fainane} alt='..' />
            <p class="mt-2">Business</p>
        </div>
        <div class="mx-5">
            <img style={{height:"50px"}} src={design} alt='..' />
            <p class="mt-2">Business</p>
        </div>
        <div class="mx-5">
            <img style={{height:"50px"}} src={photo} alt='..' />
            <p class="mt-2">Business</p>
        </div>
        <div class="mx-5">
            <img style={{height:"50px"}} src={office} alt='..' />
            <p class="mt-2">Business</p>
        </div>
    </div>
  )
}

export default Domain