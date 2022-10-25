import React from 'react';
import './Header.css';
import {Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <nav>
                <ul className={"nav-list"}>
                    <div className={"nav-list-left"}>
                        <li className={"nav-item"}>
                            <Link to={"/"}>Homegate</Link>
                        </li>
                        <li className={"nav-item"}>
                            <a href={"#"}>Submit ad</a>
                        </li>
                        <li className={"nav-item"}>
                            <a href={"#"}>Rent</a>
                        </li>
                        <li className={"nav-item"}>
                            <a href={"#"}>Buy</a>
                        </li>
                        <li className={"nav-item"}>
                            <a href={"#"}>Mortgages</a>
                        </li>
                        <li className={"nav-item"}>
                            <a href={"#"}>Moving</a>
                        </li>
                        <li className={"nav-item"}>
                            <a href={"#"}>Advisor</a>
                        </li>
                    </div>
                    <div className={"nav-list-right"}>
                        <li className="nav-item">
                            <a href={"#"}>Favourites</a>
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