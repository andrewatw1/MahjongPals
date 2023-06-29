import React from "react";
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--numberone', 'btn--numbertwo']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, to}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]


  if (to) {
    return (
      <Link to={to} className="btn-mobile">
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


    return (
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type = {type}
            >
                {children}
            </button>
    )
}