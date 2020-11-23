import React from 'react';
import './style.css'

const Icon = (props) => {
    return (
        <div className = "t-icon">
            {props.source}
        </div>
    )
}

export default Icon;