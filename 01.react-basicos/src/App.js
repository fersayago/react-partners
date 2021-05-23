import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = "Fernando";
  let auth = false;
  let estaciones = ["primavera", "verano", "otoño", "invierno"]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* usamos htmlFor */}
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />

        {/* creamos una variable definida en la funcion */}
        <h1>{nombre}</h1>

        {/* usamos un condicional (operador ternario) */}
        <p>{auth? "El usuario esta logueado" : "El usuario NO esta logueado"}</p>

        {/* operación aritmetica */}
        <p>{ 2+1 }</p>

        {/* generamos una lista con elementos de un array */}
        <ul>
          {estaciones.map((el, index) => (
            /* para que tenga una key distinta por cada elemento, le agregamos el index  as key */
            <li key={index}>{el}</li>
          ))}
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;