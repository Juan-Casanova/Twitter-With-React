//Se import Modulos
import React from 'react';

//Se importa componentes
import Icon from '../icon/icon';

const Sidebar = (props) => {
    return (
        <div>
            <div>
                {
                    props.iconList.map( icon => {
                        return (
                            <Icon source = {icon} />
                        )
                    })
                }
            </div>
        </div>
        )
}

export default Sidebar;