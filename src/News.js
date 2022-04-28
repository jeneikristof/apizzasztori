import NewsStyle from "./CSS/News.module.css"
import Footer from "./Footer"
import balaton from "./images/balaton.hu.png"
import roadster from "./images/roadster.png"
export default function News(){
    return (
        <>
        <div className={NewsStyle.container}>
            <div className={NewsStyle.flexbox}>
                <div>
                <a href="https://gusto.hu/gasztrohirek/megnyilt-a-deli-part-elso-napolyi-pizzazoja" target="_blank">
                    
                    <img src="https://gusto.hu/design/gusto/kellekek/gusto-logo.svg"></img>
                    <p>„A pizza, mint étel nagyon népszerű, mégis kevés az igazán jó pizzéria, különösen a déli parton. Mi egy igazán autentikus, fatüzelésű látványkemencével működő nápolyi pizzériát álmodtunk ide, a szabadon álló családi ingatlanba.</p>
                </a>
                </div>
                <div>
                <a href="https://balaton.hu/mar-sul-az-elso-kezmuves-napolyi-pizza-a-deli-parton/" target="_blank">
                    <img src={balaton}></img>
                    <p>Mi köze van Lajosnak Luigihoz? Hogyan került Balatonmáriafürdőre a speckó olasz pizza-kemence? Miért nyit egy tősgyökeres balatoni vendéglátócsalád kézműves pizzériát a Balatonon? A máriafürdői, streetfoodban is erős Balla család megnyitotta a déli part első fatüzelésű nápolyi pizzériáját. Ez maga A Pizza Sztori.</p>
                </a>
                
                </div>
                <div>
                <a href="https://roadster.hu/balatonmariafurdo-pizzeria/" target="_blank">
                    <img src={roadster} ></img>
                    <p>Gombai Tamás, évtizedes tapasztalattal rendelkező pizzamester felel azért, hogy minden pizza tökéletes legyen – a lényeg a tésztában rejlő titok, és az eredmény, egy isteni nápolyi pizza, ami nagyon hiányzott már a déli partról.</p>
                </a>
                </div>
            </div>
            

        </div>
        <Footer/>
        </>
    )
}