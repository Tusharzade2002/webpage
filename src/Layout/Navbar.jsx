import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Assects/logo.png'
function Navbar() {
  return (
    <div >
    <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between Regular shadow">
   <div class="container-fluid ">
    <Link to="/" class="navbar-brand" ><img style={{height:"40px" ,marginLeft:"40px"}} src={Logo}/></Link >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item mx-3">
          <Link to="/course" class="nav-link" >Course</Link>
        </li>
        <li class="nav-item mx-3">
          <Link to="/bootcamp" class="nav-link" >Bootcamp</ Link>
        </li>
        <li class="nav-item mx-3">
          <Link to="/contact" class="nav-link" >Contact</Link>
        </li>
        <li class="nav-item mx-3">
          <Link to="/about" class="nav-link" >About Us</Link>
        </li>
       
      </ul>
      <div class="ml-6">
      <input class="btn btn-primary mx-2 rounded-pill bg-transparent text-primary" type="submit" value="Login"/>
      <input class="btn btn-primary mx-2" type="submit" value="Register"/>
      </div>
      
      </div>
  </div>
 </nav>
</div>
  )
}

export default Navbar