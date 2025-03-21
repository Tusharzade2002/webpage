import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {COURSE} from '../../Data/CourseList'
function Ccards() {
  return (
    <div  >
        <h1 class="text-center">courses</h1>
        <div class="d-flex flex-wrap mx-5 align-item-center justify-content-center">
        {
            COURSE.map((items,index)=>{
                const {title,img} =items
                return(
                    <Card style={{ width: '18rem',margin:"20px"}} >
                        <Card.Img variant="top" src={img} />
                          <Card.Body>
                            <Card.Title>{title}</Card.Title>
                              <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                              </Card.Text>
                                 <Button class="d-block mx-auto bg-primary border-0 rounded px-4">Enroll</Button>
                          </Card.Body>
                   </Card>
                )
            })
        }
        </div>
    </div>
  )
}

export default Ccards