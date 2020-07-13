import React, { Component } from 'react';

// helper
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';

// Components
import Header from './Header'
import Formulario from './Formulario';
import Resumen from './Resumen';


class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (data) => {     // La data que recibe es la enviada por el componente hijo Formulario.jsx
    const { marca, year, plan } = data;
    // Precio Base
    let resultado = 2000;

    // Obtener la diferencia del año elegido con el año actual
    const diferencia = obtenerDiferenciaAnio(year);

    // Por cada año que retrocedo resto el 3%
    resultado -= ((diferencia * 3) * resultado) / 100;

    // Aumento de valor segun la marca del auto
    resultado = calcularMarca(marca) * resultado;

    // Depende el plan elegido incrementar
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    const infoAuto = {
      marca: marca,
      year: year,
      plan: plan
    }

    this.setState({
      resultado: resultado,
      datos: infoAuto
    })
  }

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo='Cotizador Seguro de Autos'
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen
            data={this.state.datos}
            resultado={this.state.resultado}
          />

        </div>
      </div>
    );
  }

}

export default App;



// Creamos una funcion en este componente padre, se la pasamos como props a su hijo (Formulario), y 
  // este la utiliza pasandole los datos que junto el, de esta manera el padre recibe los datos del hijo