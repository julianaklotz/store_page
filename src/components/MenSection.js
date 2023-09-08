import { useState } from "react";
import products from "./data.json";
import Card from "./Card";
import Buttons from "./Buttons";


function MenSection(){
    const [item, setItems] = useState(products)
    const menuItems = [...new Set(products?.map((val) => val.type))]
    
    const filterItems = (cat) => {
        const newItems = products.filter((newval) => newval.type === cat)
        setItems(newItems)
    }

    return(
        <section id="products" className="">
            <div className="container">
                <div className="title text-right">
                    <span className="position-relative d-inline-block">Roupas Masculinas</span>
                </div>
                <Buttons menuItems = {menuItems}
                filterItems = {filterItems}
                setItems={setItems}
                />
                <Card item = {item}/>            
            </div>
        </section>
    )
}

export default MenSection;