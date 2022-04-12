import DrinksStyle from "./CSS/Drinks.module.css"
import Footer from "./Footer"
import DrinksHeader from "./images/drinkheader.png"
import DrinksFooter from "./images/menufooter.svg"

export default function Drinks(){
    return (
        <>  
            <div className={DrinksStyle.headerImg}>
                <img src={DrinksHeader}/>
            </div>
            <div className={DrinksStyle.container}>
                <div className={DrinksStyle.leftDiv}>
                    <div>
                        <h3>BOROK</h3>
                        <div><p>Plébános rosé</p><span>350 Ft/dl</span></div>
                        <div><p>Plébános cuvée fehér</p><span>350 Ft/dl</span></div>
                        <div><p>Lajvér Incognito</p><span>3.390 Ft/üveg</span></div>
                        <div><p>Skizo Irsai Olivér</p><span>2.490 Ft/üveg</span></div>
                        <div><p>Santa Cristina Compogrande Orvieto</p><span>3.690 Ft/üveg</span></div>
                        <div><p>Konyári Rosé</p><span>2.590 Ft/üveg</span></div>
                        <div><p>Ikon Cabarnet Sauvignon</p><span>2.790 Ft/üveg</span></div>
                        <div><p>Santa Cristina Le Maestrelle Toscana</p><span>3.990 Ft/üveg</span></div>
                    </div>
                    <div>
                        <h3>PEZSGŐK</h3>
                        <div><p>Hungráia Extra Dry 0,2 l</p><span>1.190 Ft</span></div>
                        <div><p>Hungráia Extra Dry 0,75 l</p><span>3.900 Ft</span></div>
                    </div>
                    <div>
                        <div><div className={DrinksStyle.shot}><h3>CSAPOLT SÖRÖK</h3></div><div className={DrinksStyle.prices}><span>0,3l</span><span>0,5 l</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Dreher</p></div><div className={DrinksStyle.prices}><span>490 Ft</span><span>800 Ft</span></div></div>
                    </div>
                    <div>
                        <h3>ÜVEGES SÖRÖK</h3>
                        <div><p>Pilsner Urquell (0,5 l)</p><span>800 Ft</span></div>
                        <div><p>Peroni(0,33 l)</p><span>600 Ft</span></div>
                        <div><p>Pécsi Gluténmentes(0,33 l)</p><span>650 Ft</span></div>
                        <div><p>Dreher alkoholmentes(0,33 l)</p><span>550 Ft</span></div>
                    </div>
                    <div>
                        <div><div className={DrinksStyle.shot}><h3>RÖVID ITALOK</h3></div><div className={DrinksStyle.prices}><span>2cl</span><span>4cl</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Jagermeister</p></div><div className={DrinksStyle.prices}><span>500 Ft</span><span>900 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Uncium</p></div><div className={DrinksStyle.prices}><span>500 Ft</span><span>900 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Baileys</p></div><div className={DrinksStyle.prices}><span>500 Ft</span><span>900 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Finlandia Vodka</p></div><div className={DrinksStyle.prices}><span>500 Ft</span><span>900 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Bacardi Carta Blanca</p></div><div className={DrinksStyle.prices}><span>500 Ft</span><span>900 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Jameson</p></div><div className={DrinksStyle.prices}><span>550 ft</span><span>950 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Jack Daniel's</p></div><div className={DrinksStyle.prices}><span>550 ft</span><span>950 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Bombay gin</p></div><div className={DrinksStyle.prices}><span>550 Ft</span><span>950 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Mlinari Limoncello</p></div><div className={DrinksStyle.prices}><span>550 Ft</span><span>950 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Tátratea 62% erdeigyümölcs</p></div><div className={DrinksStyle.prices}><span>700 ft</span><span>1300 Ft</span></div></div>
                        <div><div className={DrinksStyle.shot}><p>Medicina pálinkák</p></div><div className={DrinksStyle.prices}><span>750 Ft</span><span>1450 Ft</span></div></div>
                        <p>(Fürtös, Meggy, Szilva, Irsai Szőlő, Nektár Szőlő</p>
                        <div><div><p>Bestillo Gönci Barackpálinka</p></div><div className={DrinksStyle.prices}><span>750 Ft</span><span>1450 Ft</span></div></div>
                    </div>
                </div>
                <div className={DrinksStyle.rightDiv}>
                    <div>
                        <h3>ÜDÍTŐK (0,25L)</h3>
                        <div><p>Coca-Cola, Coca-Cola zero</p><span>450 Ft</span></div>
                        <div><p>Fanta</p><span>450 Ft</span></div>
                        <div><p>Kinley Gyömbér</p><span>450 Ft</span></div>
                        <div><p>Kinley Tonic</p><span>450 Ft</span></div>
                        <div><p>Cappy Alma</p><span>450 Ft</span></div>
                        <div><p>Cappy Narancs</p><span>450 Ft</span></div>
                        <div><p>Natur Aqua Ásványvíz (0,33 l)</p><span>400 Ft</span></div>
                        <div><p>Bomba energiaital (0,25 l)</p><span>550 Ft</span></div>
                    </div>
                    <div>
                        <h3>KÁVÉK</h3>
                        <div><p>Espresso</p><span>450 Ft</span></div>
                        <div><p>Lungo</p><span>490 Ft</span></div>
                        <div><p>Espresso Macchiato</p><span>490 Ft</span></div>
                        <div><p>Cappuccino</p><span>590 Ft</span></div>
                        <div><p>Latte Macchiato</p><span>750 Ft</span></div>
                        <div><p>Melange</p><span>800 Ft</span></div>
                        <div><p>Flat White</p><span>900 Ft</span></div>
                        <div><p>Jeges Kávé</p><span>950 Ft</span></div>
                        <div><p>Naileys Melange</p><span>1350 Ft</span></div>
                        <div><p>Ír Káve</p><span>1400 Ft</span></div>
                        <ul>
                            <li><p>- Kókusz vagy karamell szirup</p><span>150 Ft</span></li>
                            <li><p>- Növényi tej/dl</p><span>150 Ft</span></li>
                            <li><p>- Laktózmentes tej/dl</p><span>100 Ft</span></li>
                            <li><p>- Méz vagy tejszínhab</p><span>70 Ft</span></li>
                        </ul>
                    </div>
                    <div>
                        <div><h3>TEÁK</h3><span>690 Ft</span></div>
                        <p>Aktuális teakínálatunkról érdeklődjön felszolgálóinknál!</p>
                    </div>
                    <div>
                        <h3>LIMONÁDÉK (0,4 L)</h3>
                        <div><p>Citrusos</p><span>890 Ft</span></div>
                        <div><p>Epres</p><span>890 Ft</span></div>
                        <div><p>Maracujás</p><span>890 Ft</span></div>
                        <div><p>Gránátalmás</p><span>890 Ft</span></div>
                        <div><p>Feketeribizlis</p><span>890 Ft</span></div>
                        <div><p>Bodzás</p><span>890 Ft</span></div>
                    </div>
                </div>
            </div>
                <div className={DrinksStyle.headerImg}>
                    <img src={DrinksFooter}/>
                </div>
            <Footer />
        </>
    )
}