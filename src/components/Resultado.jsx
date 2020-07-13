import React from 'react';

const Resultado = ({ resultado }) => {

    return (
        <>
            <div className="gran-total">
                {
                    !resultado
                        ? <div>
                            <span>Elije Marca, Año y Plan de Seguro</span>
                        </div>
                        : <span> El Total es: $ {resultado}</span>
                }

            </div>
        </>
    )
}

export default Resultado;