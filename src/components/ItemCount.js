import React, { useState,useEffect } from "react";
import "./ItemCount.css"

export default function ItemCounter({stock,inicial}) {
    const [count, setCount] = useState(inicial);

    const onAdd = () => {
        if(count<stock){
            setCount(count+1)
        }
    }

  return (
    <div className="contador">
                <button className="btn btn-outline-secondary" onAdd={()=>setCount(count -1)}>-</button>
                <spam>{count}</spam>
                <button className="btn btn-outline-secondary" onAdd={onAdd}>+</button> 
                <br></br>           
                <button className="btn btn-success " >Agregar al carrito</button>
            </div>
  );
}

