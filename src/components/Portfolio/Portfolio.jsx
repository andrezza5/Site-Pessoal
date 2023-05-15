import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./Portfolio.css";

function Portfolio({portfolio}) {

    return (        
     <main>     

       {portfolio?.map(
        (item, index) =>
        <ItemPortfolio
        key={index}
        link={item.link}
        image={item.image + (index + 1)}
        title={item.title + (index + 1)}
         ></ItemPortfolio>
       )}       
    </main>

    )
}

export default Portfolio;