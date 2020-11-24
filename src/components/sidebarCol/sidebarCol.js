//Se importa los modulos que se necesitan
import React from 'react';

//Se importa los componentes que se van a utilizar
import SearchBar from '../searchBar/searchBar';
import Trends from '../trends/trends';

const SideBarCol = (props) => {
    return (
        <div className="t-sidebar-col">

            <div>
                <SearchBar />
            </div>
            <h2>Qué esta pasando</h2>
            <div>
                <Trends />
            </div>

        </div>
    )
}

export default SideBarCol;