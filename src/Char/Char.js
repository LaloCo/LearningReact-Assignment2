import React from 'react';
import './Char.css'

const Char = props => {
    return(
        <div className="Char"
             onClick={props.click}>
            {props.c}
        </div>
    );
}

export default Char;
