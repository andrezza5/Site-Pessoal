import React from "react";

import "./ItemPortfolio.css";
import imagemPortfolio from "../../assets/img/ftsitedesbrave.png";

function ItemPortfolio(props) {
    return (
    <div className="item-portfolio">
            <a href={props.link} target="_blank">
            <img src={imagemPortfolio} alt="Portfolio"/>   
            <p>{props.title}</p>
            </a>
        </div>  
    ); 
}

export default ItemPortfolio;