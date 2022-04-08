import FoodStyle from "./CSS/Food.module.css"
import Menu from "./images/etlap.jpg"

export default function Food(){
    let pizzas = [
        {
            name:"PORTAFOGLIO",
            price:1790,
            description:"(Négybe hajtott sétálós pizza)",
            ingredients:"San Marzano Paradicsom, Mozzarella di Bufala, Parmezán, Bazsalikom, Extra szűz olívaolaj"
        },
         {
            name:"MARINARA",
            price:1790,
            description:"",
            ingredients:"San Marzano Paradicsom, Fokhagyma, Oregánó, Extra szűz olívaolaj"
        },
        {
            name:"MARGHERITA",
            price:1990,
            description:"",
            ingredients:"San Marzano Paradicsom, Mozzarella di Bufala, Parmezán, Bazsalikom, Extra szűz olívaolaj"
        },
         {
            name:"COTTO",
            price:2390,
            description:"",
            ingredients:"San Marzano Paradicsom, Fior di Latte, Prosciutto Cotto, Parmezán"
        },
        {
            name:"NAPOLI",
            price:2390,
            description:"",
            ingredients:"San Marzano Paradicsom, Fior di Latte, Napoli szalámi, Szárított Paradicsom"
        },
         {
            name:"CALZONE",
            price:2590,
            description:"",
            ingredients:"San Marzano Paradicsom, Fior di Latte, Salsiccia, Gorgonzola, Parmezán"
        },
        {
            name:"PARMA",
            price:2590,
            description:"",
            ingredients:"San Marzano Paradicsom, Fior di Latte, Pesto Rosso, Pármai sonka, Fenyőmag, Borsóhajtás"
        },
        {
            name:"BIANCO",
            price:2650,
            description:"",
            ingredients:"Mozzarella di Bufala, Pancetta, Bébispenót, Ricotta, Pisztácia, Extra szűz olívaolaj"
        },
        {
            name:"BUFALA",
            price:2650,
            description:"",
            ingredients:"San Marzano Paradicsom, Mozzarella di Bufala, Rukkola, Pármai Sonka, Pesto Genovese, Parmezán"
        },
        {
            name:"MARE",
            price:2690,
            description:"",
            ingredients:"San Marzano Paradicsom, Fior di Latte, Szardella, Gyöngyhagyma, Kapros Mascarpone"
        },
        {
            name:"TRUFFLE",
            price:2790,
            description:"",
            ingredients:"Mozzarella di Bufala, Pármai sonka, Fenyőmag, Szarvasgomba paté, Parmezán, Borsóhajtás"
        },
        {
            name:"CARPACCIO E INDIVIA",
            price:3290,
            description:"",
            ingredients:"San Marzano Paradicsom, Mozzarella di Bufala, Black Angus Carpaccio, Pirított Mogyoró, Fehér Szarvasgombaolaj, Endívia"
        }

    ]
    
//     <div>
                    
//     <h3>{elem.price}</h3>
//     <h3>{elem.price}</h3>

// <p>{elem.description}</p>
// <p>{elem.ingredients}</p>
// </div>) 
    return (
        <>
            <div className={FoodStyle.container}>
                {pizzas.map(elem => <div>
                    <div className={FoodStyle.nameAndPrice}>
                        <h3>{elem.name}</h3>
                        <p>{elem.price}</p>
                    </div>
                    <p>{elem.description}</p>
                    <p>{elem.ingredients}</p>
                </div>)}

            
            </div>
        </>
    )
}