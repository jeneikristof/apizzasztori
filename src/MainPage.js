import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import pizza from "./images/pizzafront.jpg"
import luigi from "./images/luigilogo2.svg"
import luigitablet from "./images/luigitablet.svg"
import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import google from "./images/googleicon.svg"
import main from "./CSS/MainPage.module.css"
import pizza1 from "./images/pizzafront.jpg"
import pizza2 from "./images/pizza17.jpg"
import pizza3 from "./images/pizza3.jpg"
import pizza4 from "./images/pizza16.jpg"
import pizza5 from "./images/pizza4.jpg"
import honappizza from "./images/honappizza3.jpg"
let pizzak =[honappizza,pizza1,pizza2,pizza3]
export default function MainPage() {
  document.title = "A Pizza Sztori";
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
          <a href="https://www.google.com/search?q=a+pizzasztori&sxsrf=ALiCzsakXEv3ObcUPc45aLhTJsAlp4-VDQ%3A1651146879635&source=hp&ei=f4BqYs6rJMemaPGcv6AK&iflsig=AJiK0e8AAAAAYmqOjygCL7LlZF-ItxA8ehh1eFfLiVJU&ved=0ahUKEwiO5-u52bb3AhVHExoKHXHOD6QQ4dUDCAc&uact=5&oq=a+pizzasztori&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELACECcyCgguEMcBEK8BEA06BwgjEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARCjAjoICC4QsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARCjAjoFCC4QgAQ6BQgAEIAEOggILhCABBCxAzoLCC4QsQMQgwEQ1AI6CAguEIAEENQCOgsILhCABBDHARCvAToFCAAQywE6CAgAEMkDEMsBOgYIABAWEB46BAguEA06BQghEKABUO0ZWJQpYOgqaAFwAHgAgAG2AYgBzgySAQQwLjEzmAEAoAEBsAEK&sclient=gws-wiz#lrd=0x4768ffd5c5ef2447:0x4a9c52173a2d1c48,1,,," target="_blank"><img src={google}></img></a>
        </div>
        <div className={main.flex}>

        <div className={main.textarea}>
          <h1>K??sz??nt??nk ??tterm??nkben!</h1>
          <p>A Balaton d??li partj??nak els?? n??polyi st??lus?? pizz??ja, fat??zel??s?? l??tv??nykemenc??b??l! Gyere ??s l??togass meg minket Balatonm??riaf??rd??n!????????</p>
          <p>
          ???? J??LIUS H??NAP PIZZ??JA ????
J??liusban tov??bb fokozzuk az ??zek kavalk??dj??t, mert ez??ttal isteni n??polyi alapunkra Prosciutto cotto, s??lt chilis k??rte ??s gorgonzola ker??lt, amit m??t??l k??rhettek A Pizza Sztoriban eg??szen a h??nap v??g??ig! ????????????????
          </p>
          <div className={main.opening}>
            <h1>Nyitvatart??s:</h1>
          <div>
            
            <p>A h??t minden napj??n! : 12:00 - 21:30</p>
          </div>
          </div>
        </div>
        </div>
        <div className={main.pizzaOven}>
          <img src={pizza5} />
          <div className={main.bubbles}>
            <div className={main.bubble}><p>Asztalfoglal??s:</p><p>+36 20 442 3800</p></div>
            <div className={main.bubbleRight}><p>K??stold meg kemenc??ben s??lt, n??polyi recept alapj??n k??sz??tett pizz??inkat!</p></div>
          </div>
        
        <div className={`${main.hiddenBubble} ${main.textarea}`}>
          <h1>K??stold meg kemenc??ben s??lt, n??polyi recept alapj??n k??sz??tett pizz??nkat!</h1> 
          <h3>Asztalfoglal??s: <a href="tel:+36308526455">+36 20 442 3800</a></h3>
          
        </div>
        <div className={main.bottomWrapper}>

        <div className={main.bottomIcons}>
          <a href="https://www.facebook.com/APizzaSztori" target="_blank"><img src={facebook}></img></a>
          <a href="https://www.instagram.com/apizzasztori/" target="_blank"><img src={instagram}></img></a>
          <a href="https://www.google.com/search?q=a+pizzasztori&sxsrf=ALiCzsakXEv3ObcUPc45aLhTJsAlp4-VDQ%3A1651146879635&source=hp&ei=f4BqYs6rJMemaPGcv6AK&iflsig=AJiK0e8AAAAAYmqOjygCL7LlZF-ItxA8ehh1eFfLiVJU&ved=0ahUKEwiO5-u52bb3AhVHExoKHXHOD6QQ4dUDCAc&uact=5&oq=a+pizzasztori&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELACECcyCgguEMcBEK8BEA06BwgjEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARCjAjoICC4QsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARCjAjoFCC4QgAQ6BQgAEIAEOggILhCABBCxAzoLCC4QsQMQgwEQ1AI6CAguEIAEENQCOgsILhCABBDHARCvAToFCAAQywE6CAgAEMkDEMsBOgYIABAWEB46BAguEA06BQghEKABUO0ZWJQpYOgqaAFwAHgAgAG2AYgBzgySAQQwLjEzmAEAoAEBsAEK&sclient=gws-wiz#lrd=0x4768ffd5c5ef2447:0x4a9c52173a2d1c48,1,,," target="_blank"><img src={google}></img></a>
        </div>
        <div className={main.footer}>
        <p>A PIZZA SZTORI</p>
        <a href="tel:+36204423800"><p>+36 20 442 3800</p></a>
        
        <p>2022 ??</p>
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