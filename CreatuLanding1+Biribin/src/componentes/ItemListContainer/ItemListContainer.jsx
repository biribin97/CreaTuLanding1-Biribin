import React from "react";
import './ItemListContainer.css';

const ItemListContainer = (props) => {

    return (
        <div className="mensajito">
            <h2>{props.mensaje}</h2>
        </div>
    )
}

export default ItemListContainer;