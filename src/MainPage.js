import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import pizza from "./images/pizzafront.jpg"
import luigi from "./images/luigilogo2.svg"
import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import tripadvisor from "./images/tripadvisor.svg"
import main from "./CSS/MainPage.module.css"
import pizza1 from "./images/pizza1.jpg"
import pizza2 from "./images/pizza2.jpg"
import pizza3 from "./images/pizza3.jpg"
export default function MainPage(){
    return(
        <>
        <div className={main.container}>
            <div className={main.carousel}>
                <ControlledCarousel />
                
            </div>
            <div className={main.luigiLogo}>
                <img src={luigi}></img>
            </div>
            <div className={main.icons}>
              <a href="https://www.facebook.com/APizzaSztori" target="_blank"><img src={facebook}></img></a>
              <a href="https://www.instagram.com/" target="_blank"><img src={instagram}></img></a>
              <a href="https://www.tripadvisor.com/" target="_blank"><img src={tripadvisor}></img></a>
            </div>
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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizza}
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizza1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizza2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizza3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }