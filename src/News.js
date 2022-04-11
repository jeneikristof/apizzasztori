import NewsStyle from "./CSS/News.module.css"
import Footer from "./Footer"
export default function News(){
    return (
        <>
        <div className={NewsStyle.container}>
            <div className={NewsStyle.flexbox}>
                <div>
                <a href="#"><img src="https://gusto.hu/design/gusto/kellekek/gusto-logo.svg"></img></a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                </div>
                <div>
                <a href="#"><img src="https://gusto.hu/design/gusto/kellekek/gusto-logo.svg"></img></a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                </div>
                <div>
                <a href="#"><img src="https://gusto.hu/design/gusto/kellekek/gusto-logo.svg"></img></a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                </div>
            </div>
            <iframe width="1280" height="682" src="https://www.youtube.com/embed/t1_kviNJsy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
        <Footer/>
        </>
    )
}