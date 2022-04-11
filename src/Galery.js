import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import pizza1 from "./images/pizza1.jpg"
import pizza2 from "./images/pizza2.jpg"
import pizza3 from "./images/pizza3.jpg"
import galery from "./CSS/Galery.module.css"
import Footer from './Footer'
let pictures = [pizza1,pizza2,pizza3,pizza1,pizza1,pizza1,pizza1,pizza2]
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
  

  
