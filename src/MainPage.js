import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import pizza from "./images/pizzafront.jpg"
import luigi from "./images/luigilogo2.svg"
import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import tripadvisor from "./images/tripadvisor.svg"
import main from "./CSS/MainPage.module.css"
import pizza1 from "./images/pizza4.jpg"
import pizza2 from "./images/pizza10.jpg"
import pizza3 from "./images/pizza3.jpg"
import pizza4 from "./images/pizza4.jpg"
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
        </div>
        </div>
        <div className={main.icons}>
          <a href="https://www.facebook.com/APizzaSztori" target="_blank"><img src={facebook}></img></a>
          <a href="https://www.instagram.com/apizzasztori/" target="_blank"><img src={instagram}></img></a>
          <a href="https://www.tripadvisor.com/" target="_blank"><img src={tripadvisor}></img></a>
        </div>
        <div className={main.flex}>

        <div className={main.textarea}>
          <h1>Köszöntünk éttermünkben</h1>
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
          <img src={pizza4} />
          <div className={main.bubbles}>
            <div className={main.bubble}><p>Reserve a table 06308526455</p></div>
            <div className={main.bubbleRight}><p>Taste our oven baked pizzas!</p></div>
          </div>
        
        <div className={main.bottomWrapper}>

        <div className={main.bottomIcons}>
          <a href="https://www.facebook.com/APizzaSztori" target="_blank"><img src={facebook}></img></a>
          <a href="https://www.instagram.com/apizzasztori/" target="_blank"><img src={instagram}></img></a>
          <a href="https://www.tripadvisor.com/" target="_blank"><img src={tripadvisor}></img></a>
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
  console.log(index)

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