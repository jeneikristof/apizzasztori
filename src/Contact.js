import ContactStyle from "./CSS/Contact.module.css"
import position from "./images/position.svg"
import time from "./images/time.svg"
import phone from "./images/phone.svg"
import email from "./images/email.svg"
import React from "react"


export default function Contact(){
    let [message, setMessage] = React.useState("")
    let [emailState,setEmailState] = React.useState("")
    let [name,setName] = React.useState("")
    return (
        <div className={ContactStyle.container}>
            <div className={ContactStyle.wrapper}>
                <div className={ContactStyle.contact}>
                    <h3>Lépjen kapcsolatba velünk</h3>
                    <div className={ContactStyle.firstDiv}><img src={position}></img><p>Balatonmáriafürdő, Rákóczi Ferenc u. 35, 8647</p></div>
                    <div><img src={time}></img><p>Péntek-Vasárnap 12:00 - 21:00</p></div>
                    <div><img src={phone}></img><p>+36 20 442 3800</p></div>
                    <div><img src={email}></img><p>info@apizzasztori.hu</p></div>
                </div>
                <div className={ContactStyle.formWrapper}>
                    <h3>Küldjön nekünk üzenetet</h3>
                    <form action="">
                        <input type="text" placeholder="Név" onChange={() => setName(name)}/>
                        <input type="email" placeholder="Email" onChange={() => setEmailState(emailState)}/>
                        <textarea name="comment" placeholder="Írjon nekünk..." form="usrform" onChange={() =>setName(name)}></textarea>
                        <input type="submit" value="Küldés"/>

                    </form>

                </div>

            </div>
            <div className={ContactStyle.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.0302983118263!2d17.37174321582408!3d46.7051366578042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768ffd5c5ef2447%3A0x4a9c52173a2d1c48!2sPizza%20sztori!5e0!3m2!1shu!2shu!4v1649243577544!5m2!1shu!2shu"></iframe>
            </div>
        </div>
    )
}