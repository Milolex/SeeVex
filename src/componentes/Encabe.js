import React from 'react'
import '../stylesheet/Encabe.css'
import {initMetric} from "web-vitals/dist/modules/lib/initMetric";
function Encabe(props){
    return(
        <div className={'principio'}>
            <img className={'logoimg'}
            src={require('../images/logoseevex.png')}
                 alt={'logotipo'}
            />
            <h2 className={'nombre1'}>
                {props.name1}
            </h2>
            <h2 className={'nombre2'}>
                {props.name2}
            </h2>
            <ul className={'lista'}>
                <li><a className={'contenido1'} href="default.asp">INICIO</a></li>
                <li><a  className={'contenedor'} href="news.asp">SERVICIOS</a></li>
                <li><a  className={'contenedor'} href="news.asp">CONTACTO</a></li>

            </ul>
        </div>
    );
}

export default Encabe;
