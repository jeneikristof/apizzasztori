import FoodStyle from "./CSS/Food.module.css"
import Footer from "./Footer"
import footer from "./images/menufooter.svg"
import header from "./images/menuheader.png"

export default function Food() {
    let pizzas = [
  
        {
            name: "MARINARA",
            price: 2490,
            description: "",
            ingredients: "San Marzano Paradicsom, Fokhagyma, Oregánó, Extra szűz olivaolaj",
            allergens: [1]
        },
        {
            name: "MARGHERITA",
            price: 2890,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Bazsalikom, Extra szűz olívaolaj",
            allergens: [1, 7]
        },
        {
            name: "TONNO",
            price: 3590,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Tonhal, Salotta hagyma, Olivabogyó",
            allergens: [1, 4, 7]
        },
        {
            name: "COTTO",
            price: 3090,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Prosciutto Cotto",
            allergens: [1, 7]
        },
        {
            name: "COTTO EXTRA",
            price: 3390,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Prosciutto Cotto, Pesto Genovese, Pisztácia",
            allergens: [1, 7,8]
        },
        {
            name: "NAPOLI",
            price: 3390,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Napoli szalámi, Szárított Paradicsom",
            allergens: [1, 7]
        },
        {
            name: "KALI NAPOLI",
            price: 3390,
            ingredients: "Fior di Latte Mozzarella, Napoli Szalámi, Szárított Paradicsom",
            allergens: [1, 7]
        },
        {
            name: "SALSICCIA",
            price: 3490,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Salsiccia, Gorgonzola",
            allergens: [1, 7]
        },
        {
            name: "PARMA",
            price: 3490,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Pesto Rosso, Pármai sonka, Borsóhajtás",
            allergens: [1, 7, 8]
        },
        {
            name: "BIANCO",
            price: 3590,
            description: "",
            ingredients: "Fior di Latte Mozzarella, Pancetta Szalonna, Bébispenót, Pisztácia, Mascarpone",
            allergens: [1, 7, 8]
        },
        {
            name: "BUFALA",
            price: 3490,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Rukkola, Pármai Sonka, Pesto Genovese, Parmezán",
            allergens: [1, 7, 8]
        },
        {
            name: "TRUFFLE",
            price: 3890,
            description: "",
            ingredients: "Fior di Latte Mozzarella, Pármai sonka, Fenyőmag, Szarvasgomba paté, Borsóhajtás",
            allergens: [1, 7, 8]
        },
        {
            name: "CARPACCIO",
            price: 3790,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Bresaola, Pirított Mogyoró, Madársaláta, Szarvasgombaolaj",
            allergens: [1, 7, 8]
        },
        {
            name: "PERA E GORGONZOLA",
            price: 3890,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte Mozzarella, Prosciutto Cotto, Chilis Körte, Gorgonzola",
            allergens: [1, 7]
        },
        {
            name: "GOURMET",
            price: 3990,
            description: "",
            ingredients: "Fior di Latte Mozzarella, Bresaola Tatár, Sült Hagyma, Kapribogyó",
            allergens: [1, 7, 8, 10]
        },
        {
            name: "FRUTTA",
            price: 3990,
            description: "",
            ingredients: "Fior di Latte Mozzarella, Keresztúri Füstölt Kolbász, Szilva, Mascarpone",
            allergens: [1, 7]
        }


    ]
    let foods = [
        {
            name: "PARADICSOMLEVES ",
            price: 1590,
            description: "",
            ingredients: "",
            allergens: [7, 8, 9]

        },
        {
            name: "MINESTRONE ",
            price: 1590,
            description: "",
            ingredients: ""
           

        },
        {
            name: "RUKKOLA SALÁTA",
            price: 2890,
            description: "",
            ingredients: "Rukkola, Balzsamecet, Mozzarella, Pármai Sonka, Pesto Rosso, Pirított Napraforgómag",
            allergens: [7, 8]

        },
        {
            name: "SZTORI APERITIVO",
            price: 3990,
            description: "",
            ingredients: "Pizzakenyér,Pármai Sonka,Pancetta,Olivabogyó,Parmezán,Olivaolaj,Rukkola",
            allergens: [7, 8]

        },
        {
            name: "TONNO SALÁTA",
            price: 2790,
            description: "",
            ingredients: "Saláta,Tonhal,Sonkahagyma,Olivabogyó,Olivaolaj,Citrom",
            allergens: [4]

        },
        {
            name: "SPAGETTI POMODORO ",
            price: 2190,
            description: "",
            ingredients: "",
            allergens: [1, 7]

        },
        {
            name: "PANNA COTTA",
            price: 1190,
            description: "",
            ingredients: "",
            allergens: [7]

        },
 
    ]


    return (
        <>
            <div className={FoodStyle.container}>
                <img src={header}></img>
                <div className={FoodStyle.grid}>
                    {pizzas.map((elem, idx) => <><div key={idx} className={idx > 14 ? FoodStyle.borderNone : FoodStyle.border}>
                        <div className={FoodStyle.nameAndPrice}>
                            <h3>{elem.name}</h3>
                            <div className={FoodStyle.flex}>
                                {elem.allergens ? elem.allergens.map((x, idx) => <div key={idx} className={FoodStyle.blackDivs}><p>{x}.</p></div>) : null}
                            </div>
                            <p>{elem.price} Ft</p>
                        </div>
                        {elem.description != "" ? <p>{elem.description}</p> : null}
                        <p>{elem.ingredients}</p>

                    </div>
                    </>
                    )}


                </div>
                <div className={FoodStyle.text}>
                    <h1>A pizzán túl...</h1>
                </div>
                <div className={`${FoodStyle.grid} ${FoodStyle.grid2}`}>
                    {foods.map((elem, idx) => <div key={idx} className={idx > 5 ? FoodStyle.borderNone : FoodStyle.border}>
                        <div className={FoodStyle.nameAndPrice}>
                            <h3>{elem.name}</h3>
                            <div className={FoodStyle.flex}>
                                {elem.allergens ? elem.allergens.map((x, idx) => <div key={idx} className={FoodStyle.blackDivs}><p>{x}.</p></div>) : null}
                            </div>
                            <p>{elem.price} Ft</p>
                        </div>
                        {elem.description != "" ? <p>{elem.description}</p> : null}
                        <p>{elem.ingredients}</p>
                    </div>
                    )}
                </div>

                <div className={`${FoodStyle.text} ${FoodStyle.text2}`}>
                    <h1>Allergének</h1>
                </div>

                <div className={FoodStyle.allergenWrapper}>
                    <div className={FoodStyle.left}>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>1.</p></div>
                            <p>Glutént tartalmazó gabona
                                és azokból készült ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>2.</p></div>
                            <p>Rákfélék és azokból
                                készült ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>3.</p></div>
                            <p>Tojás és azokból készült
                                ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>4.</p></div>
                            <p>Hal és azokból készült ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>5.</p></div>
                            <p>Földimogyoró és azokból készült ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>6.</p></div>
                            <p>Szójabab és azokból készült ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>7.</p></div>
                            <p>Tej és azokból készült ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>8.</p></div>
                            <p>Diófélék, azaz mandula,
                                mogyoró, dió, kesudió,
                                pekándió, brazil dió,

                                pisztácia, makadámia-
                                vagy queenslandi dió

                                és azokból készült ételek.</p>
                        </div>
                    </div>
                    <div className={FoodStyle.right}>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>9.</p></div>
                            <p>Zeller és azokból készült
                                ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>10.</p></div>
                            <p>Mustár és azokból készült
                                ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>11.</p></div>
                            <p>Szezámmag és azokból
                                készült ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>12.</p></div>
                            <p>Kén-dioxid és az SO2
                                -ben
                                kifejezett szulfitok.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>13.</p></div>
                            <p>Csillagfürt és azokból
                                készült ételek.</p>
                        </div>
                        <div className={FoodStyle.column}>
                            <div className={FoodStyle.blackDivs2}><p>14.</p></div>
                            <p>Puhatestűek és azokból
                                készült ételek.</p>
                        </div>
                    </div>
                </div>
                <img src={footer}></img>
            </div>
            <Footer />
        </>
    )
}