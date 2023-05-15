import React from "react";
import andrezza from "../../assets/img/andrezza.jpg";
import "./Header.css";


function Header() {
    return <header>
    <div className="center">        
    <img src={andrezza} alt="Foto de Andrezza"/>
    </div>
    <h1>Andrezza Marcilio</h1>
    <h2>Desenvolvedora de Software</h2>
    </header>
}

export default Header;