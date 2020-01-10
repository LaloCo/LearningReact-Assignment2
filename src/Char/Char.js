import React from 'react';
import './Char.css'

const Char = props => {
    return(
        <div className="Char">
            {props.c}
        </div>
    );
}

export default Char;
