//Se importa los modulos que se van a utilizar
import React from 'react'

//Se importa los componentes a utilizar en la gerarquia
import PrimaryCol from '../primaryCol/primaryCol';
import SiderCol from '../sidebarCol/sidebarCol';

const Main = (props) => {
    return (
        <div className="t-main">
            <PrimaryCol profileUrl = {props.profileUrl}/>
            {/* <SiderCol/> */}
        </div>
    )
}

export default Main;