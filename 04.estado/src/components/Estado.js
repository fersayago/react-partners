import React, { Component } from "react";
import EstadoAHijo from './EstadoAHijo'

class Estado extends Component {
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }

    /* al ejecutar el setInterval en el constructor */
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      })
    }, 1000);
  }

  render() {
    return <div>
      <h2>El state</h2>
      <p>Contador estado propio: {this.state.contador}</p>
      <EstadoAHijo contadorHijo={this.state.contador}/>
    </div>
  }
}

export default Estado;