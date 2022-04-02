import DrinksStyle from "./CSS/Drinks.module.css"
import drinks from "./images/itallap.jpg"

export default function Drinks(){
    return (
        <>
            <div className={DrinksStyle.container}>
                <img src={drinks}></img>
            </div>
        </>
    )
}