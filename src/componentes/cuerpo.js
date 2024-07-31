import React from 'react'; 
import bus from '../imagenes/imagen2.jpg'

function Cuerpo(){ 
    return(

        <div class="container text-center">
            <div class="row">
                <div class="col">
                <img src={bus} className="cuerpobus"/>
                </div>
                <div class="col" >
                    <p className='col2'> Tarjetas </p>
                    <p className='col2'> Denuncias </p>
                    <p className='col2'> Mapa Vial </p>
                </div>
            </div>
        </div>


    );
}
export default Cuerpo;