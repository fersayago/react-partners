import React, { Component } from "react";
import IsLoggedIn from "./IsLoggedIn"
import NotLoggedIn from "./NotLoggedIn";


class RenderizadoCondicional extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: false
    }
  }
  
  render(){
    return (
      <div>
        <h2>Renderizado Conidicional</h2>
        {this.state.session ?
          <IsLoggedIn /> : <NotLoggedIn />
        }
      </div>
    )
  }
}

export default RenderizadoCondicional;