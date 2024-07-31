import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./componentes/menu";
import Pie from "./componentes/pie";
import Cuerpo from './componentes/cuerpo';
import './estilos/estilo.css';
import Submenu from './componentes/submenu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Submenu/>
      <div className='colorcito'> . </div>
      <Cuerpo/>
      <header className="App-header">
      </header>
      <footer>
      <div className='colorcito'> . </div>
        <Pie/>
        <div className='colorcito'> . </div>
      </footer>
    </div>
  );
}

export default App;

