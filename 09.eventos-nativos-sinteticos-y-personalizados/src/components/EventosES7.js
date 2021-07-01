import React, { Component } from "react";

// !Properties Initializers
class EventosES7 extends Component {
  
  state = {
    contador:0,
  }
  
  restarContador = (e) => {
    console.log("Restando")
    this.setState({
      contador: this.state.contador - 1,
    })
  }
  
  // Arrow functions
  sumarContador = (e) => {
    console.log("Sumando")
    this.setState({
      contador: this.state.contador + 1,

    })
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.restarContador}>-</button>
          <button onClick={this.sumarContador}>+</button>
        </nav>
      </div>
    )
  }
}

export default EventosES7;