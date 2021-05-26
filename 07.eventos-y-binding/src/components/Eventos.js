import React, { Component } from "react";



class Eventos extends Component {
  constructor(props){
    super(props)
    this.state = {
      contador: 0
    };

    /* evento de la clase = bind a la acción del boton */
    this.restarContador = this.restarContador.bind(this);
    this.sumarContador = this.sumarContador.bind(this);
  }
  
  restarContador(){
    console.log("Restando")
    this.setState({
      contador: this.state.contador - 1,
    })
  }
  
  sumarContador() {
    console.log("Sumando")
    this.setState({
      contador: this.state.contador + 1,

    })
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.restarContador}>-</button>
          <button onClick={this.sumarContador}>+</button>
        </nav>
      </div>
    )
  }
}

export default Eventos;