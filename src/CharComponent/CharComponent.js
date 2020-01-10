import React from 'react';
import './CharComponent.css'

const CharComponent = props => {
    return(
        <div className="CharComponent">
            {props.c}
        </div>
    );
}

export default CharComponent;
