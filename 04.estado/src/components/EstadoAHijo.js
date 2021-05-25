import React from "react";

function EstadoAHijo(props) {
  /* Recibe el contador a traves del estado del elemento padre */
  return (
    <div>
      <p>Contador estado padre: {props.contadorHijo}</p>
    </div>
  )
}

export default EstadoAHijo;