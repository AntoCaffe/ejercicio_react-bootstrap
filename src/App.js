import './App.css';
import Carousel from './components/Carousel';
import RegistrationForm from './components/RegistrationForm';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

function App() {
  return (
    <div>
      {/* Navbar con fondo gris topo y letras rosa */}
      <div className="navbar">
        <div className="container">
          <p className="navbar-text">Inscríbete para el sorteo del Día de la Madre</p>
        </div>
      </div>

      {/* Carrusel */}
      <Carousel />

      {/* Formulario de Registro */}
      <div className="container mt-3">
        <h1>Formulario de Registro</h1>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
