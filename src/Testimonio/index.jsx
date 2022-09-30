import React from "react";
import './testimonio.css';

function Testimonio(props){
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio' 
                src={require(`../images/testimonio-${props.image}.png`)} 
                alt='imagen-testimonio' />
            <div className='contenedor-text-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.name}</strong> en {props.country}
                </p>
                <p className='Cargo-testimonio'>
                    {props.job} en <strong>{props.company}</strong>
                </p>
                <p className='texto-del-testimonio'>
                    "{props.testimony}"
                </p>
                
            </div>
        </div>
    );
};

export {Testimonio};