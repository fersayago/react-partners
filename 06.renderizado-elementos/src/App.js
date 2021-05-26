import logo from './logo.svg';
import './App.css';
import RenderizadoElementos from './components/RenderizadoElementos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>

        <img src={logo} className="App-logo" alt="logo" />

          </section>
          <section>
            <hr />
            <RenderizadoElementos />
          </section>
      </header>
    </div>
  );
}

export default App;
