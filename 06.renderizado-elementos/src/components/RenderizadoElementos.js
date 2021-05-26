import React, { Component } from "react";
import data from "./../helpers/frameworks.json";


// ! Esta función deberia ser un componente aparte
function ElementoLista (props){
  return (
    <li>
      <a href={props.fwweb} target="_blank" rel="noreferrer">{props.fwname}</a>
    </li>
  )
}

class RenderizadoElementos extends Component {
  constructor (props){
    super(props)
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
    }
  }


  render () {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año desde estado</h3>
        <ol>
          {
            this.state.seasons.map((el) => <li key={el}>{el}</li>)
          }
        </ol>
        <h3>Frameworks desde JSON</h3>
        <ul>
          {
            data.frameworks.map((elem) => (
              <ElementoLista  fwname={elem.name} key={elem.id} fwweb={elem.web} />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default RenderizadoElementos;