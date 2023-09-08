import React from "react";
import products from "./data.json"


function Buttons({menuItems, filterItems, setItems}) {
    return(
        <div className="d-flex flex-wrap justify-content-right mt-5 filter-button-group">
            <button className="btn m-2 text-dark" onClick={() => setItems(products)} id="botao">
                Todos
            </button>
            {
                menuItems.map(val => (
                    <button className="btn m-2 text-dark" id="botao"
                    onClick={() => {filterItems(val)}}>
                        {val}
                    </button>
                ))
            }
        </div>
    )
}

export default Buttons