//Se importa los modulos a utilizar
import React from 'react';

//Se importa hoja de estilos
import './styles.css'

const SearchBar = () => {
    return (
        <div className = "containerSearch">
            <form>
                <input placeholder = "Buscar en Twitter" />
            </form>
        </div>
    )
}

export default SearchBar;