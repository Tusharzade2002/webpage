import React from 'react'
import  Image from '../Assects/Researchpaper-pana.png'
import  CheckIcon  from '../Assects/checkedicon.png'
function Advantage() {
  return (
    <div class="w-100 d-flex px-5 py-0 rounded">
        <div class="d-flex align-items-center">
            <div>
                <h1 class="text-center">The Advantage of the Upskill Program</h1>
                <div class="container text-center ms-5 mt-5">
                      <div class="row row-cols-2">
                          <div class="col">
                            <div class="d-flex">
                               <img style={{height:"30px"}} src={CheckIcon} alt='...'/>
                                <p>Relevent Skill Set</p>
                            </div>
                          </div>
                          <div class="col">
                            <div class="d-flex">
                            <img style={{height:"30px"}} src={CheckIcon} alt='...'/>
                            <p>Growth Mindset</p>
                            </div>
                          </div>
                          <div class="col">
                            <div class="d-flex mt-2">
                            <img style={{height:"30px"}} src={CheckIcon} alt='...'/>
                            <p>1-on-1 Metting</p>
                            </div>
                          </div>
                          <div class="col">
                            <div class="d-flex mt-2">
                            <img style={{height:"30px"}} src={CheckIcon} alt='...'/>
                            <p>Hiring Patner</p>
                            </div>
                          </div>
                     </div>
               </div>
            </div>
        </div>
        <div>
                  <img style={{height:"500px"}}src={Image} alt='...'/>
        </div>
    </div>
  )
}

export default Advantage