import React from 'react'
import Image from '../Assects/Studying-rafiki.png'
import Analysis from '../Assects/Analysis-rafiki.png'
import  studyimg from '../Assects/Studying-amico.png'
function Card1() {
  return (
    <div class="ms-5">
        <div style={{width:"100%"}} class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-60 ">
      <img src={Image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-60">
      <img src={Analysis} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-60">
      <img src={studyimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card1