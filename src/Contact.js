import ContactStyle from "./CSS/Contact.module.css"

export default function Contact(){
    return (
        <div className={ContactStyle.container}>
            <div className={ContactStyle.wrapper}>
                <div className={ContactStyle.contact}>
                    <h3>Lépjen kapcsolatba velünk</h3>
                    <p>Balatonmáriafürdő, Rákóczi Ferenc u. 35, 8647</p>
                    <p>Péntek-Vasárnap 12:00 - 21:00</p>
                    <p>+36 11 234 5678</p>
                    <p>+36 20 442 3800</p>
                    <p>info@apizzasztori.hu</p>
                </div>
                <div className={ContactStyle.formWrapper}>
                    <h3>Küldjön nekünk üzenetet</h3>
                    <form action="">
                        <input type="text" placeholder="Név"  />
                        <input type="email" placeholder="Email"  />
                        <textarea name="comment" form="usrform">Írjon nekünk...</textarea>
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