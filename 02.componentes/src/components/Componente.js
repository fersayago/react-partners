//import React, { Component } from 'react';


// Componente funcional
function Componente(props){
  return <h2>{props.msg}</h2>
}

// Componente funcional con arrow
/* const Componente = (props) => <h2>{props.msg}</h2> */

// Componente basado en clase
/* class Componente extends Component {
  // Un componente por default debe tener su componente render
  render() {
    return <h2>{this.props.msg}</h2>;
  } 
} */

export default Componente;