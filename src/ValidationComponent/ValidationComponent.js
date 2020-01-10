import React from 'react'
import './ValidationComponent.css'

const validationComponent = props => {
    let text = null;

    if (props.textLength >= 5) {
        text = (
            <p>Text long enough.</p>
        )
    } else {
        text = (
            <p>Text too short.</p>
        )
    } 
    return (
        <div>
            {text}
        </div>
    );
}

export default validationComponent;

