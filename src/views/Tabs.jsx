import React, { useState } from 'react';

const Tabs = (props) => {

    const [mensaje, setMensaje] = useState('');

    const { tabs } = props;

    const mostrarMensaje = (value, posicion) => {
        setMensaje(value);

        tabs.map((tab)=>(
            tab.seleccionado= ''
        ));
        
        tabs[posicion].seleccionado="selected"
        
    } 

    return (
        <>
            <ul className="nav nav-pills">
                {
                    tabs.length > 0 && tabs.map((tab, index) => (
                        <li id={tab.seleccionado} className="nav-item" key={index}><a className="nav-link active" href="javascript:" onClick={()=> { mostrarMensaje(tab.mensaje,index)}}> {tab.nombre}</a></li>
                    ))
                }
                
            </ul>

            <div id="content">
                <h1>{mensaje}</h1>
            </div>
        </>
    );

}

export default Tabs;