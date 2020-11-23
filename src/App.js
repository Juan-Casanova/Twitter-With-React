//Importacion de los modulos que se necesitan
import React from 'react';

//Se impoprta hoja de estilos y componentes principales
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main'

//se importa elementos exteriores
import {
  HomeSolid,
  HashtagOutline,
  BellOutline,
  MailOutline,
  UserOutline,
  DotsCircleHorizontalOutline
} from "@graywolfai/react-heroicons";

class App extends React.Component{

  constructor (){
    super();
    this.state = {
      iconArray: [
        < HomeSolid />,
        < HashtagOutline />,
        < BellOutline />,
        < MailOutline />,
        < UserOutline />,
        < DotsCircleHorizontalOutline />
      ]
    }
  }

  render() {
    return (
      <div>
        <Sidebar iconList={this.state.iconArray}/>
        <Main/>
      </div>
    )
  }

}

export default App;
