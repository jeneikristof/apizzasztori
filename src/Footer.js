import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import tripadvisor from "./images/tripadvisor.svg"
import main from "./CSS/MainPage.module.css"
export default function Footer(){
    return (
<footer className={main.bottomWrapper}>

<div className={main.bottomIcons}>
  <a href="https://www.facebook.com/APizzaSztori" target="_blank"><img src={facebook}></img></a>
  <a href="https://www.instagram.com/" target="_blank"><img src={instagram}></img></a>
  {/* <a href="https://www.tripadvisor.com/" target="_blank"><img src={tripadvisor}></img></a> */}
</div>
<div className={main.footer}>
    <p>A PIZZA SZTORI</p>
    <p>+36 20 442 3800</p>
    <p>2022 ©</p>
</div>
</footer>
    )
}