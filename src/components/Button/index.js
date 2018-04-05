import React from 'react';

const Button = props => {
  const { onClick, children, ...rest} = props;
  return (
    <button className="Button" onClick={onClick} {...rest}>
      {children}
    </button>
  )
};

export default Button;