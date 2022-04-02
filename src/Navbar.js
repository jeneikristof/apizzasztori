import React from "react"
import nav from "./CSS/Navbar.module.css"
import pizzasztori from "./images/pizzasztori.svg"
import {BrowserRouter, Routes,Route,NavLink} from "react-router-dom"
import Food from "./Food.js"
export default function Navbar(){
    return ( 
    <>
        
        <div className={nav.container}>
            <div className={nav.left}>
            <NavLink to="/"><img className={nav.sztoriLogo} src={pizzasztori}></img></NavLink>
            </div>
            <div className={nav.right} >
                <NavLink to="/etlap"><div>Étlap</div></NavLink>
                <NavLink to="/itallap"><div>Itallap</div></NavLink>
                <NavLink to="/galeria"><div>Galéria</div></NavLink>
                <NavLink to="/kapcsolat"><div>Kapcsolat</div></NavLink>
                <NavLink to="/cikkek"><div>Cikkek</div></NavLink>
            </div>
        </div>
        
      
        </>
    )
}