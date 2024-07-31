import React from 'react'; 
import logobus from '../imagenes/imagen7.jpg.png';

function Submenu(){ 
    return(
        <div>
            <img src={logobus} className="submenubus"/>
            <ol className="list-group list-group-numbered">
                <li className="list-group-item">Historial de recargas</li>
                <li className="list-group-item">Recargar Tarjetas</li>
                <li className="list-group-item">Empresas/Cooperativas Asociadas</li>
            </ol>
        </div>
    );
}

export default Submenu;
