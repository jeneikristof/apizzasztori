import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import pizza1 from "./images/pizza1.jpg"
import pizza2 from "./images/pizza2.jpg"
import pizza3 from "./images/pizza3.jpg"

import pizza5 from "./images/pizza5.jpg"
import pizza6 from "./images/pizza6.jpg"
import pizza7 from "./images/pizza7.jpg"
import pizza8 from "./images/pizza8.jpg"
import pizza9 from "./images/pizza9.jpg"
import pizza10 from "./images/pizza10.jpg"
import pizza11 from "./images/pizza11.jpg"
import pizza12 from "./images/pizza12.jpg"
import pizza13 from "./images/pizza13.jpg"
import pizza16 from "./images/pizza16.jpg"
import pizza15 from "./images/pizza15.jpg"
import pizza17 from "./images/pizza17.jpg"
import pizza18 from "./images/pizza18.png"
import pizza19 from "./images/pizza19.jpg"
import pizza20 from "./images/pizza20.jpg"
import galery from "./CSS/Galery.module.css"
import galleryfooter from "./images/galleryfooter.svg"
import Footer from './Footer'
import luigi from "./images/luigilogo2.svg"
let pictures = [pizza2,pizza3,pizza5,pizza6,pizza7,pizza8,pizza9,pizza10,pizza11,pizza12,pizza13,pizza17,pizza16,pizza18,pizza19,pizza20]
export default function Galery(){
    return (
      <>
        <div className={galery.container}>
        <div className={galery.carousel}>
          
        <ControlledCarousel />
          
        </div>
        <div className={galery.allPics}>
            {/* {pictures.map((elem,i) => <div className={galery.column}><img key={i} src={elem}/></div>)} */}
            <div className={galery.column}>
    <img src={pizza7}/>
    <img src={pizza3}/>
    <img src={pizza16}/>
    <img src={pizza5}/>
    
    
  
  </div>
            <div className={galery.column}>
    <img src={pizza6}/>
    <img src={pizza10}/>
    <img src={pizza8}/>
    <img src={pizza18}/>
    
  </div>
            <div className={galery.column}>
    
    <img src={pizza2}/>
    <img src={pizza11}/>
    <img src={pizza12}/>
    <img src={pizza19}/>
    
    
  </div>
            <div className={galery.column}>
    <img src={pizza17}/>
    {/* <img src={pizza15}/> */}
    <img src={pizza13}/>
    <img src={pizza9}/>
    <img src={pizza20}/>
    
    
    
  
  </div>
        </div>
        </div>
        <img src={galleryfooter}/>
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
      <Carousel  onSelect={handleSelect}>
          {pictures.map((elem,i) => <Carousel.Item key={i}>
            <div className={galery.imgBackground}>

          <img key={i}
            className="d-block w-100"
            src={elem}
            alt="First slide"
            />
            </div>
         
        </Carousel.Item> )}
      </Carousel>
    );
  }
  

  
