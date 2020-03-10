import React from 'react';
import "./styles/navbar.css";

function Navbar(props) {

    return(
        <nav>
            <div onClick={() => props.clickHandler("all")}>All</div>
            <div onClick={() => props.clickHandler("games")}>Games</div>
            <div onClick={() => props.clickHandler("television")}>Television</div>
            <div onClick={() => props.clickHandler("animation")}>Animation</div>
        </nav>
    );

}

export default Navbar;