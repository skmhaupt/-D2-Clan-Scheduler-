import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({
    purpose,
    destination,
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
    if(purpose === 'destination'){
        return (
            <Link to={`/${destination}`} className='btn-mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        );
    }
    else {
        return (
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
        );
    };

};