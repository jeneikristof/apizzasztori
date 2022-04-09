import DrinksStyle from "./CSS/Drinks.module.css"
import drinks from "./images/itallap.jpg"

export default function Drinks(){
    return (
        <>
            <div className={DrinksStyle.container}>
                <div className={DrinksStyle.leftDiv}>
                    <h2>BOROK</h2>
                </div>
                <div className={DrinksStyle.rightDiv}></div>
            </div>
        </>
    )
}