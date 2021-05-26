import logo from "./logo.svg";
import "./App.css";
import Eventos from "./components/Eventos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section>
          <hr />
          <Eventos />
        </section>
      </header>
    </div>
  );
}

export default App;
