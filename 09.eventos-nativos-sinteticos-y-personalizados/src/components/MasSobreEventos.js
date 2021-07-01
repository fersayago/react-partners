import React, { Component } from 'react';

/* function Boton (props){
  return <button onClick={props.myOnClick}>Botón hecho componente</button>
} */

// Simplificamos renderizando directamente la respuesta
/* const Boton = (props) => (
  <button onClick={props.myOnClick}>Botón hecho componente</button>
); */

// Destructuramos el objeto tomando solo la propiedad que nos interesa
const Boton = ({myOnClick}) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    // ! para ver el Synthethic event de React:
    console.log(e);
    console.log(e.target);
    // ! para ver el evento nativo de JS:
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    alert(mensaje);
  }
  
  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <h3>Synthethic Event</h3>
        {/* Creo una funcion que ejecute el handleClick y le pase el parametro mensaje */}
        <button onClick={(e) => this.handleClick(e, "Pasando parametro desde un evento")}>Saludar</button>
        <br />
        <Boton myOnClick={(e) => this.handleClick(e, "Pasando funcion desde props")}/>
      </div>
    )
  }
}

export default MasSobreEventos;