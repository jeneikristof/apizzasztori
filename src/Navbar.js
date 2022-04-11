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
                <NavLink to="/etlap"><p>Étlap</p></NavLink>
                <NavLink to="/itallap"><p>Itallap</p></NavLink>
                <NavLink to="/galeria"><p>Galéria</p></NavLink>
                <NavLink to="/kapcsolat"><p>Kapcsolat</p></NavLink>
                <NavLink to="/cikkek"><p>Cikkek</p></NavLink>
            </div>
        </div>
        
      
        </>
    )
}