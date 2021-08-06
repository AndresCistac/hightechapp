import { Component } from "react";
import './ItemCount.css';
export default class ItemCount extends Component{
    
    state= {
        count:0,
        stock:5,
    }

    sacar = () =>{
        this.setState({
            count: this.state.count -1
        })
    }
    agregar = () =>{
        this.setState({
            count: this.state.count +1
        })
    }
    render() {
      return (
          <>
            <div className="contador">
                <button className="btn btn-outline-secondary" onClick={this.sacar}>-</button>
                {this.state.count}
                <button className="btn btn-outline-secondary" onClick={this.agregar}>+</button> 
                <br></br>           
                <button className="btn btn-success " >Agregar al carrito</button>
            </div>
            
           </> )
    }
    
}