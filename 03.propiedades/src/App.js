import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola desde componente"/>
          <hr />
          <Propiedades 
            cadena = "Esto es una cadena de texto"
            numero = {19} // las llaves para definir numero
            boolean = {true} // para los boolean tambien se usan llaves
            array = {[1, 2, 3]}
            objeto = {{
              nombre:"Fer",
              correo:"sayago.fernando@gmail.com"
            }} //primeras llaves para indicar formato JSX; segundas para el objeto
            elementoReact = {<b>Esto es un elemento React en Bold</b>}
            funcion = {num => num * num}
            componenteReact = {<Componente msg="Soy un componente pasado como prop"/>}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
