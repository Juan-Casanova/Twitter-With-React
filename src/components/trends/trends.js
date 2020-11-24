//Se importa los modulos a utilizar
import React from 'react';

//Se importa los estilos y codigo de afuera
import {trends} from '../../source2';
import './styles.css'

class Trends extends React.Component {
    constructor() {
        super();
        this.state = {
            newtrend : trends
        }
    }

    render() {
        return (
            <div className = "container-Trends">
                {
                    this.state.newtrend.map( trend=> {
                        return (
                            <div className = "container-Trend">
                                <p className = "categoryTrend">{trend.category}</p>
                                <p className = "tittleTrend">{trend.tittle}</p>
                                <p className = "noTrend">{trend.noTweets/1000} mil Tweets</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Trends;