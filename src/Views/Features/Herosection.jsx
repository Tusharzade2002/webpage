import React from "react";
import { Container, Carousel, Button } from 'react-bootstrap';
import './Index.css'

const Herosection = () => {
  return (
    <div>
<Carousel controls={true} indicators={false} interval={3000}>
      <Carousel.Item>
        <div className="carousel-image" style={{ backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-sunrise-over-a-lake-with-trees-in-the-background-image_2904373.jpg')`,backgroundRepeat:"no-repeat"}} >
          <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
            <p className="small-text">Explore India with Our Package</p>
            <h1 className=" bold-text fw-bold">EXPLORE INDIA FESTIVAL AND CULTURE </h1>
            <Button variant="danger" className="mt-3 px-4 py-2">Book Now</Button>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image" style={{ backgroundImage:`url("https://static.vecteezy.com/system/resources/thumbnails/023/824/643/small/fantasy-landscape-with-mountains-and-lake-at-sunset-ai-generated-free-photo.jpg")`}}>
          <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
            <p className="small-text">Explore India with India Travel</p>
            <h1 className="fw-bold bold-text">EXPERIENCE LUXURY TRAINS OF INDIA</h1>
            <Button variant="danger" className="mt-3 px-4 py-2">Book Now</Button>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image" style={{backgroundImage:`url("https://static.vecteezy.com/system/resources/thumbnails/035/314/184/small/ai-generated-beautiful-sunset-on-lake-free-photo.jpg")`, width:"100%"  }} >
          <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
            <p className="small-text">Explore India with India Travel</p>
            <h1 className="fw-bold bold-text">EXPLORE LUXURY UNIQUE HOTELS OF INDIA</h1>
            <Button variant="danger" className="mt-3 px-4 py-2">Book Now</Button>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Herosection;