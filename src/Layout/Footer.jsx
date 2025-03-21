import React from 'react'
import { Facebook ,Twitter , Youtube } from 'lucide-react';
import Logo from '../Assects/logo.png'
import Whatapp from '../Assects/whatsapp.png'
import gmail from  '../Assects/gmail.png'
import {Link } from 'react-router-dom'
function Footer() {
  return (
    <div class="container-fluid p-0" >
  <div class="row  pt-4" style={{background:"#4d4d4d" , width:"100%",color:"white"}}>
  <div class="col ">
      <h3 class="mb-3">
      <p> <img style={{height:"60px",marginLeft:"80px" , marginTop:"10px"}} src={Logo} alt='...'/></p> 
      </h3>
      <div class="d-flex flex-column  ms-5">
        <div class="w-1 d-flex flex-column">
          <img style={{width:"30px", marginLeft:"45px"}} class="" src={Whatapp} />
          <p>91+ 0987654321</p>
        </div>
        
        <div class="d-flex mb-0" >
          <img style={{width:"30px", marginLeft:"45px"}}  class=" "  src={gmail} alt='dfgrgred'/></div>
          <p>tusharzade@gmail.com</p>
       </div>
      
    </div>
    <div class="col border-start ps-5">
        <h3 class="mb-3">Company</h3>
      <p>About</p>
      <p>What We Offer</p>

     <Link to='/course' class="text-decoration-none text-light"> <p>Course</p></Link>
      <p>carrer</p>
    </div>
    <div class="col border-start ps-5">
        <h3 class="mb-3">Teaching</h3>
      <p>Became a Teacher</p> 
      <p>Teacher Help center</p>
      <p>Rules and Requirement</p>
      <p>LeaderShip</p>



    </div>
    <div class="col border-start ps-5">
        <h3 class="mb-3">Connect With Us</h3>
        <div class="d-flex">
            <div class="bg-primary rounded-circle m-3 p-2"><Facebook/></div>
            <div class="bg-primary rounded-circle m-3 p-2"><Youtube/></div>
            <div class="bg-primary rounded-circle m-3 p-2">< Twitter/></div>
          <img></img>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer