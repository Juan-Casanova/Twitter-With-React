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
      ],
      profileUrl: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar iconList={this.state.iconArray} profileUrl={this.state.profileUrl} />
        <Main/>
      </div>
    )
  }

}

export default App;
