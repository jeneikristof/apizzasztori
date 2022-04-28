import React from "react"
import nav from "./CSS/Navbar.module.css"
import pizzasztori from "./images/pizzasztori.svg"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Food from "./Food.js"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
export default function NavBar() {
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
                <div className={nav.hamburger}>
                <Navbar style={{paddingRight:"1rem",paddingLeft:"1rem"}} bg="myRed" variant="light" 
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
        <NavLink to="/"><img src={pizzasztori} width="50px" height="50px" />{' '}</NavLink>
          
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav style={{fontWeight:"bold"}}>
      
            <Nav.Link href="etlap" >Étlap</Nav.Link>
            <Nav.Link href="itallap">Itallap</Nav.Link>
            <Nav.Link href="galeria">Galéria</Nav.Link>
            <Nav.Link href="kapcsolat">Kapcsolat</Nav.Link>
            <Nav.Link href="cikkek">Cikkek</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      </div>


        </>
    )
}