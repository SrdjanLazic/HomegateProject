import React from 'react';
import './Header.css';
import {Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


function toggleHamburger() {

    const elements = document.getElementsByClassName("hide");

    for (const el of elements) {
        el.style.display = 'inline-block';
    }

    const navListLeft = document.getElementsByClassName("nav-list-left")
    navListLeft.style.display = 'flex'
    navListLeft.style.flexDirection = 'column'
}


function Header(){
    return (
        <header>
            <nav>
                <ul className={"nav-list"}>
                    <div className={"nav-list-left"} id={"navbar"}>
                        <li onClick={toggleHamburger} className={"nav-item hamburger"}>
                            <MenuIcon/>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/"}>Homegate</Link>
                        </li>
                        <li className={"nav-item hide"}>
                            <a href={"#"}>Submit ad</a>
                        </li>
                        <li className={"nav-item hide"}>
                            <a href={"#"}>Rent</a>
                        </li>
                        <li className={"nav-item hide"}>
                            <a href={"#"}>Buy</a>
                        </li>
                        <li className={"nav-item hide"}>
                            <a href={"#"}>Mortgages</a>
                        </li>
                        <li className={"nav-item hide"}>
                            <a href={"#"}>Moving</a>
                        </li>
                        <li className={"nav-item hide"}>
                            <a href={"#"}>Advisor</a>
                        </li>
                    </div>
                    <div className={"nav-list-right"}>
                        <li className="nav-item">
                            <Link to={"/favourites"}>Favourites</Link>
                        </li>
                        <li className="nav-item">
                            <a href={"#"}>User account</a>
                        </li>
                        <li className="nav-item">
                            <a href={"#"}>EN</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header