import logo from "./logo.svg";
import "./App.css";
import RenderizadoCondicional from "./components/RenderizadoCondicional"

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
          <hr />
          <RenderizadoCondicional />
        </section>
      </header>
    </div>
  );
}

export default App;
