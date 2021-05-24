import React from "react";
import PropTypes from "prop-types";

function Propiedades (props) {
  return (
    <>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boolean ? "Verdadero" : "Falso"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.elementoReact}</li>
        <li>{props.array.map(props.funcion).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </>
  )
}

Propiedades.defaultProps = {
  porDefecto: "Hola desde defaultProps"
}

Propiedades.propTypes = {
  cadena: PropTypes.string.isRequired,
  numero: PropTypes.number,
  boolean: PropTypes.bool,
  array: PropTypes.array,
  objeto: PropTypes.object,
  funcion: PropTypes.func
}

export default Propiedades;