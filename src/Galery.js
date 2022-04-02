import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import facebook from "./images/facebook.svg"
import pizza1 from "./images/pizza1.jpg"
import pizza2 from "./images/pizza2.jpg"
import pizza3 from "./images/pizza3.jpg"
import galery from "./CSS/Galery.module.css"
let pictures = [pizza1,pizza2,pizza3,pizza1,pizza1,pizza1,pizza1,pizza2]
export default function Galery(){
    return (
        <>
        <div className={galery.carousel}>
        <ControlledCarousel />
        </div>
        <div className={galery.allPics}>
            {pictures.map(elem => <img src={elem}/>)}
        </div>
        </>
    )

}
function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          {pictures.map(elem => <Carousel.Item>
          <img
            className="d-block w-100"
            src={elem}
            alt="First slide"
          />
         
        </Carousel.Item> )}
      </Carousel>
    );
  }
  

  
