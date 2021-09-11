import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import food1 from './images/food1.jpg';
import food2 from './images/food2.jpg';
import food3 from './images/food3.jpg';
import Slide from 'react-reveal/Slide';


import React from 'react'

function Home() {

    
    return (
        <div>

                <div className="caraousel">
            <Slide left>  <Carousel>
  <Carousel.Item style={{height:"696px"}}>
    <img
      className="d-block w-100"
      src={food1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Green Products</h3>
      <p>We provide you Green Products which are fresh and healthy</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:"696px"}}>
    <img
      className="d-block w-100"
      src={food3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Enjoy Our Products</h3>
      <p>Embracing diversity of thought, cultures with our food Products</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:"696px"}}>
    <img
      className="h-70 d-block w-100 "
      src={food2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>BENEFITS</h3>
      <p>We provide genuine food products whic are fresh and healthy. Our companies directly consumes products from producer as raw and convert it into fresh packages of foods</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> </Slide>


              </div>
              
             
            
        </div>
    )
}

export default Home;
