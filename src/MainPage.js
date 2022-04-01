import pizza from "./images/pizzafront.jpg"
import luigi from "./images/luigilogo.svg"
import main from "./CSS/MainPage.module.css"
export default function MainPage(){
    return(
        <div className={main.container}>
            <div className={main.carousel}>
                <img src={pizza}></img>
            </div>
            <div className={main.luigiLogo}>
                <img src={luigi}></img>
            </div>
        </div>
    )
}