import React, { Component } from 'react';
// helper
import { primeraMayuscula } from '../helper';
// component
import Resultado from './Resultado';

class Resumen extends Component {

    mostrarResumen = () => {
        const { marca, year, plan } = this.props.data;

        if (!marca || !year || !plan) return null;
        return (
            <div className="resumen">
                <h2>Resumen De Cotizacion</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del Auto: {primeraMayuscula(year)}</li>
            </div>
        )
    }
    render() {

        return (
            <div>
                {this.mostrarResumen()}
                <Resultado
                    resultado={this.props.resultado}
                />
            </div>
        )
    }
}

export default Resumen;