import React from 'react'
import '../stylesheet/Encabe.css'
function Encabe(props){
    return(
        <div className={'principio'}>
            <div className={'barra'}>
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
                    <li><a className={'contenido1'} href="#inicio">INICIO</a></li>
                    <li><a  className={'contenedor'} href="#service">SERVICIOS</a></li>
                    <li><a  className={'contenedor'} href="#contacta">CONTACTANOS</a></li>
                </ul>
            </div>



            <div className={'inicio'}>
                <h3 className={'tit'}>
                    DESARROLLAMOS
                </h3>
                <h1 className={'contenido'}>
                    <strong>PARA AUTOMATIZAR<br/>TU FUTURO</strong>
                </h1>
                <img className={'foto'}
                     src={require('../images/digital2.png')}
                     title={'Digital icono creado por Eucalyp - Flaticon (https://www.flaticon.es/iconos-gratis/digital)'}
                     alt={'fotito'}/>
            </div>




            <div className={'service'} id={'service'}>
                <div className={'iconoa'}>
                    <img className={'android'}
                    src={require('../images/ico1.png')}
                    title={'Icono diseñado por Eucalyp (https://www.flaticon.es/autores/eucalyp) (https://www.flaticon.es/) Flaticon'}
                    alt={'icoAndroid'}/>
                    <img className={'nube'}
                         src={require('../images/ico3.png')}

                         title={'Icono diseñado por Secret Studio  (https://www.flaticon.es/) Flaticon'}
                         alt={'icoNube'}/>

                </div>


                <div className={'conte'}>
                    <h1 className={'texto'}><strong>SERVICIOS</strong></h1>
                    <h3 className={'texto'}><strong>¡Da el primer paso!</strong></h3>
                    <p className={'texto'}>automatiza tu pensamiento y te acompañaremos a desarrollar tu futuro.<br/><br/>Desarrollamos proyectos con tecnoligas modernas y eficientes para brindar una mejor experiencia a tus ideas</p>

                </div>
                <div className={'iconoe'}>
                    <img className={'android'}
                         src={require('../images/ico2.png')}
                         title={'Icono diseñado por Dysa Studio (https://www.flaticon.es/autores/dysa-studio) (https://www.flaticon.es/) Flaticon'}
                         alt={'icoAndroid'}/>


                    <img className={'datos'}
                         src={require('../images/ico4.png')}

                         alt={'icoNube'}/>

                </div>
            </div>


            <div className={'contactanos'} id={'contacta'}>
                <hr/>

                <div className={'contitulo'}>
                    <h1 className={'titucon'}>CONTACTANOS</h1>
                </div>

                <div className={'ico1'}>
                    <img className={'icofacebook'}
                         src={require('../images/facebook.png')}
                         alt={'icofacebook'}/>
                    <p className={'nomredes'} >https:facebook.com</p>

                    <div className={'ico3'}>
                        <img className={'icoinstagram'}
                             src={require('../images/instagram.png')}
                             alt={'icoinstagram'}/>
                        <p className={'nomredes'} >https:instagram.com</p>
                    </div>


                    <img className={'icocorreo'}
                         src={require('../images/correo.png')}
                         alt={'icocorreo'}/>
                    <p className={'nomredes'} >seevexprograming@gmail.com</p>
                </div>

                <div className={'ico2'}>
                    <img className={'icotwitter'}
                         src={require('../images/twitter.png')}
                         alt={'icotwitter'}/>
                    <p className={'nomredes'} >https:twitter.com</p>

                    <img className={'icotelefono'}
                         src={require('../images/telefono.png')}
                         alt={'icotelefono'}/>
                    <p className={'nomredes'} >(+57)3145794612</p>


                    <img className={'icoseevex'}
                         src={require('../images/logoseevex.png')}
                         alt={'icoseevex'}/>


                </div>





            </div>


        </div>
    );
}

export default Encabe;
