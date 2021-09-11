
import './Content.css';
import food4 from './images/food4.jpg';
import food5 from './images/food5.jpg';
import food6 from './images/food6.jpeg';
import food7 from './images/food7.jpg';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';
import Shake from 'react-reveal/Shake';
import Zoom from 'react-reveal/Zoom';




import React from 'react'

function Content() {
    return (
        <div>
             <section className="projects">
            <div className="proj-header"><Slide left>PRODUCTS</Slide></div>
            
            
           
        


          <div className="project-container">
          <div className="project-wrapper">
        <Shake>   <div className="card"><img src={food4}/>
    <div className="info">
      <h1>Green Product</h1>
      <p>Buy Green Vegies and Fruits </p>
       <button ><a href="">Read More</a></button>
    </div>
  </div>
  </Shake>

  <Zoom> <div className="card"><img src={food5}/>
    <div className="info">
      <h1>Public Goods</h1>
      <p>Shopping Organic Ranch Dressing</p>
      <button><a href="">Read More</a></button>
    </div>
  </div></Zoom>

     <Shake><div className="card"><img src={food6}/>
    <div className="info">
      <h1>Dry Fruits</h1>
      <p>Energy Dates</p>
      <button><a href="">Read More</a></button>
    </div>
  </div></Shake>

<Pulse>  <div className="card"><img src={food7}/>
    <div className="info">
      <h1>Food Powders</h1>
      <p>Buy Baking Powders</p>
      <button><a href="">Read More</a></button>
    </div>
  </div>
  </Pulse>


  
 
</div>
           





          </div>
              
        
           </section>
        </div>
    )
}

export default Content;
