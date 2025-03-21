import React from 'react'
import Image from '../Assects/637dc29d23239b4f6f305166_Hero Section.webp'
function Cards() {
  return (
    <div class="m-5">
    <div class="bg-secondary bg-gradient py-4 mx-10 mb-3 rounded ">
        <h1 style={{textAlign:"center"}}>BootCamp Program</h1>
        <div class="d-flex justify-content-center ml-2 mt-4">
        <div class="card mx-4" style={{width: "18rem"}}>
             <img src={Image} class="card-img-top" alt=""/>
               <div class="card-body">
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
        </div>
        <div class="card mx-4" style={{width: "18rem"}}>
             <img src={Image}  class="card-img-top" alt=""/>
               <div class="card-body">
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
        </div>
        <div class="card mx-4" style={{width: "18rem"}}>
             <img src={Image}  class="card-img-top" alt=""/>
               <div class="card-body">
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
        </div>
    </div>
    </div>
        
    </div>
  )
}

export default Cards