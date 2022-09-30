import './App.css';
import {Testimonio} from './Testimonio';
import {Titulo} from './Titulo';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Titulo/>
        <Testimonio/>
      </div>
    </div>
  );
}

export default App;
