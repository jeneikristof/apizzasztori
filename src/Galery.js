import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import pizza1 from "./images/pizza1.jpg"
import pizza2 from "./images/pizza2.jpg"
import pizza3 from "./images/pizza3.jpg"
import pizza4 from "./images/pizza4.jpg"
import pizza5 from "./images/pizza5.jpg"
import pizza6 from "./images/pizza6.jpg"
import pizza7 from "./images/pizza7.jpg"
import pizza8 from "./images/pizza8.jpg"
import pizza9 from "./images/pizza9.jpg"
import pizza10 from "./images/pizza10.jpg"
import pizza11 from "./images/pizza11.jpg"
import pizza12 from "./images/pizza12.jpg"
import pizza13 from "./images/pizza13.jpg"
import pizza14 from "./images/pizza14.jpg"
import pizza15 from "./images/pizza15.jpg"
import pizza16 from "./images/pizza16.jpg"
import galery from "./CSS/Galery.module.css"
import Footer from './Footer'
let pictures = [pizza2,pizza3,pizza4,pizza5,pizza6,pizza7,pizza8,pizza9,pizza10,pizza11,pizza12,pizza13,pizza14,pizza15,pizza16]
export default function Galery(){
    return (
      <>
        <div className={galery.container}>
        <div className={galery.carousel}>
        <ControlledCarousel />
        </div>
        <div className={galery.allPics}>
            {pictures.map((elem,i) => <img key={i} src={elem}/>)}
        </div>
        </div>
        <Footer />
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
          {pictures.map((elem,i) => <Carousel.Item key={i}>
          <img key={i}
            className="d-block w-100"
            src={elem}
            alt="First slide"
          />
         
        </Carousel.Item> )}
      </Carousel>
    );
  }
  

  
