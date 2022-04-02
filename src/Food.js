import FoodStyle from "./CSS/Food.module.css"
import Menu from "./images/etlap.jpg"

export default function Food(){
    return (
        <>
            <div className={FoodStyle.container}>
                <img src={Menu}></img>
            </div>
        </>
    )
}