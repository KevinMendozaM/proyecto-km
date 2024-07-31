import React from 'react'; 

function Menu(){ 
    return(
        <div className='titulos'>
            <p className='subtitulos'> Kevin Mendoza </p>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="BUSCAR" aria-label="BUSCAR" />
                    <button className="btn btn-outline-success" type="submit">BUSCAR</button>
                </form>
                </div>
            </nav>
            
        </div>
    );
}
export default Menu;