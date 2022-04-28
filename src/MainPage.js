import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import pizza from "./images/pizzafront.jpg"
import luigi from "./images/luigilogo2.svg"
import luigitablet from "./images/luigitablet.svg"
import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import tripadvisor from "./images/tripadvisor.svg"
import main from "./CSS/MainPage.module.css"
import pizza1 from "./images/pizzafront.jpg"
import pizza2 from "./images/pizza15.jpg"
import pizza3 from "./images/pizza3.jpg"
import pizza4 from "./images/pizza16.jpg"
import pizza5 from "./images/pizza4.jpg"
let pizzak =[pizza1,pizza2,pizza3,pizza4]
export default function MainPage() {
  return (
    <>
      <div className={main.container}>
        <div className={main.carouselAndLuigi}>

        <div className={main.carousel}>
          

          <ControlledCarousel />
          

        </div>
        <div className={main.luigiLogo}>
          <img src={luigi}></img>
          <img src={luigitablet}></img>
        </div>
        </div>
        <div className={main.icons}>
          <a href="https://www.facebook.com/APizzaSztori" target="_blank"><img src={facebook}></img></a>
          <a href="https://www.instagram.com/apizzasztori/" target="_blank"><img src={instagram}></img></a>
          {/* <a href="https://www.google.com/maps/place/Pizza+sztori/@46.705133,17.3717432,17z/data=!4m5!3m4!1s0x4768ffd5c5ef2447:0x4a9c52173a2d1c48!8m2!3d46.705133!4d17.3739319?hl=hu" target="_blank"><img src="https://img.icons8.com/ios-filled/2x/google-web-search.png"></img></a> */}
        </div>
        <div className={main.flex}>

        <div className={main.textarea}>
          <h1>Köszöntünk éttermünkben!</h1>
          <p>
            Pizza ipsum dolor amet philly steak chicken and bacon anchovies
            chicken wing meat lovers stuffed thin crust red onions party white
            pizza.  Bacon & tomato thin crust sausage, stuffed crust chicken
            wing philly steak white garlic bbq sauce ranch buffalo sauce extra
            cheese platter bianca.  Pepperoni sausage bacon & tomato bbq sauce
            ricotta.  Parmesan spinach garlic parmesan sausage large, mozzarella
            steak green bell peppers pan meatball.  Red onions onions personal,
            marinara black olives stuffed crust sausage bbq rib sausage pesto.
            Bbq
            sauce party chicken wing, bacon marinara stuffed crust sausage ricotta
            parmesan large.  Peppers white pizza pan pepperoni pizza meatball,
            anchovies broccoli.  Bbq rib ricotta garlic sauce bacon & tomato.
            Stuffed pesto meatball deep crust.  Marinara sauteed onions mayo
            mushrooms.  Steak pie sausage, bbq mushrooms mozzarella stuffed platter
            lasagna buffalo sauce philly steak chicken wing.
          </p>
        </div>
        </div>
        <div className={main.pizzaOven}>
          <img src={pizza5} />
          <div className={main.bubbles}>
            <div className={main.bubble}><p>Asztalfoglalás: 06308526455</p></div>
            <div className={main.bubbleRight}><p>Kóstold meg kemencében sült pizzánkat!</p></div>
          </div>
        
        <div className={main.bottomWrapper}>

        <div className={main.bottomIcons}>
          <a href="https://www.facebook.com/APizzaSztori" target="_blank"><img src={facebook}></img></a>
          <a href="https://www.instagram.com/apizzasztori/" target="_blank"><img src={instagram}></img></a>
          {/* <a href="https://www.google.com/maps/place/Pizza+sztori/@46.705133,17.3717432,17z/data=!4m5!3m4!1s0x4768ffd5c5ef2447:0x4a9c52173a2d1c48!8m2!3d46.705133!4d17.3739319?hl=hu" target="_blank"><img src={tripadvisor}></img></a> */}
        </div>
        <div className={main.footer}>
        <p>A PIZZA SZTORI</p>
        <p>+36 20 442 3800</p>
        <p>2022 ©</p>
        </div>
        </div>
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
      {pizzak.map((elem,i) =>    <Carousel.Item>
        <div className={main.backgroundCarousel}>
        <img
          className="d-block w-100"
          src={elem}
          alt="First slide"
        />
        </div>
       
        
      </Carousel.Item>)}
   
      
    </Carousel>
  );
}