import FoodStyle from "./CSS/Food.module.css"
import Footer from "./Footer"
import footer from "./images/menufooter.svg"
import header from "./images/menuheader.png"

export default function Food() {
    let pizzas = [
        {
            name: "PORTAFOGLIO",
            price: 1990,
            description: "(Négybe hajtott sétálós pizza)",
            ingredients: "San Marzano Paradicsom, Mozzarella di Bufala, Parmezán, Bazsalikom, Extra szűz olívaolaj",
            allergens: [1, 7]
        },
        {
            name: "MARINARA",
            price: 1990,
            description: "",
            ingredients: "San Marzano Paradicsom, Fokhagyma, Oregánó, Extra szűz olívaolaj",
            allergens: [1]
        },
        {
            name: "MARGHERITA",
            price: 2490,
            description: "",
            ingredients: "San Marzano Paradicsom, Mozzarella di Bufala, Parmezán, Bazsalikom, Extra szűz olívaolaj",
            allergens: [1, 7]
        },
        {
            name: "COTTO",
            price: 2690,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte, Prosciutto Cotto, Parmezán",
            allergens: [1, 7]
        },
        {
            name: "NAPOLI",
            price: 2790,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte, Napoli szalámi, Szárított Paradicsom",
            allergens: [1, 7]
        },
        {
            name: "CALZONE",
            price: 2890,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte, Salsiccia, Gorgonzola, Parmezán",
            allergens: [1, 7]
        },
        {
            name: "PARMA",
            price: 2990,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte, Pesto Rosso, Pármai sonka, Fenyőmag, Borsóhajtás",
            allergens: [1, 7, 8]
        },
        {
            name: "BIANCO",
            price: 2990,
            description: "",
            ingredients: "Mozzarella di Bufala, Pancetta, Bébispenót, Ricotta, Pisztácia, Extra szűz olívaolaj",
            allergens: [1, 7, 8]
        },
        {
            name: "BUFALA",
            price: 2990,
            description: "",
            ingredients: "San Marzano Paradicsom, Mozzarella di Bufala, Rukkola, Pármai Sonka, Pesto Genovese, Parmezán",
            allergens: [1, 7, 8]
        },
        {
            name: "MARE",
            price: 3190,
            description: "",
            ingredients: "San Marzano Paradicsom, Fior di Latte, Szardella, Gyöngyhagyma, Kapros Mascarpone",
            allergens: [1, 4, 7]
        },
        {
            name: "TRUFFLE",
            price: 3190,
            description: "",
            ingredients: "Mozzarella di Bufala, Pármai sonka, Fenyőmag, Szarvasgomba paté, Parmezán, Borsóhajtás",
            allergens: [1, 7, 8]
        },
        {
            name: "CARPACCIO E INDIVIA",
            price: 3590,
            description: "",
            ingredients: "San Marzano Paradicsom, Mozzarella di Bufala, Black Angus Carpaccio, Pirított Mogyoró, Fehér Szarvasgombaolaj, Endívia",
            allergens: [1, 5, 7]
        }


    ]
    let foods = [
        {
            name: "PARADICSOMLEVES ",
            price: 1190,
            description: "",
            ingredients: "Parmezán chips",
            allergens: [7]

        },
        {
            name: "RUKKOLA SALÁTA",
            price: 2190,
            description: "",
            ingredients: "Modenai balzsamecet, Pármai sonka, Parmezán, Mozzarella, Pesto rosso, Pirított magvak",
            allergens: [7, 8]

        },
        {
            name: "PIZZAKENYÉR ",
            price: 1490,
            description: "",
            ingredients: "Fokhagymás borsos Ricotta mártogatóssal",
            allergens: [1, 7]

        },
        {
            name: "PANNA COTTA",
            price: 990,
            description: "",
            ingredients: "",
            allergens: [7]

        },
        {
            name: "LASAGNE A KEMENCÉBŐL",
            price: 2990,
            description: "",
            ingredients: "",
            allergens: [1,3,7,9]

        }
    ]


    return (
        <>
            <div className={FoodStyle.container}>
                <img src={header}></img>
                <div className={FoodStyle.grid}>
                    {pizzas.map((elem, idx) => <><div key={idx} className={idx > 8 ? FoodStyle.borderNone : FoodStyle.border}>
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
                    {foods.map((elem, idx) => <div key={idx} className={idx > 2 ? FoodStyle.borderNone : FoodStyle.border}>
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