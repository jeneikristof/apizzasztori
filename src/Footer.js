import facebook from "./images/facebook.svg"
import instagram from "./images/instagram.svg"
import google from "./images/googleicon.svg"
import main from "./CSS/MainPage.module.css"
export default function Footer(){
    return (
<footer className={main.bottomWrapper}>

<div className={main.bottomIcons}>
  <a href="https://www.facebook.com/APizzaSztori" target="_blank"><img src={facebook}></img></a>
  <a href="https://www.instagram.com/" target="_blank"><img src={instagram}></img></a>
<a href="https://www.google.com/search?q=a+pizzasztori&sxsrf=ALiCzsakXEv3ObcUPc45aLhTJsAlp4-VDQ%3A1651146879635&source=hp&ei=f4BqYs6rJMemaPGcv6AK&iflsig=AJiK0e8AAAAAYmqOjygCL7LlZF-ItxA8ehh1eFfLiVJU&ved=0ahUKEwiO5-u52bb3AhVHExoKHXHOD6QQ4dUDCAc&uact=5&oq=a+pizzasztori&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELACECcyCgguEMcBEK8BEA06BwgjEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARCjAjoICC4QsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARCjAjoFCC4QgAQ6BQgAEIAEOggILhCABBCxAzoLCC4QsQMQgwEQ1AI6CAguEIAEENQCOgsILhCABBDHARCvAToFCAAQywE6CAgAEMkDEMsBOgYIABAWEB46BAguEA06BQghEKABUO0ZWJQpYOgqaAFwAHgAgAG2AYgBzgySAQQwLjEzmAEAoAEBsAEK&sclient=gws-wiz#lrd=0x4768ffd5c5ef2447:0x4a9c52173a2d1c48,1,,," target="_blank"><img src={google}></img></a>
</div>
<div className={main.footer}>
    <p>A PIZZA SZTORI</p>
    <a href="tel:+36204423800"><p>+36 20 442 3800</p></a>
    <p>2022 ©</p>
</div>
</footer>
    )
}