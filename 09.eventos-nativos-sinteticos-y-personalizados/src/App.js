import logo from "./logo.svg";
import "./App.css";
import EventosES6 from "./components/EventosES6";
import EventosES7 from "./components/EventosES7";
import MasSobreEventos from "./components/MasSobreEventos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section>
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
        </section>
      </header>
    </div>
  );
}

export default App;
