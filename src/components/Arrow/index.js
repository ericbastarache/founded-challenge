import React from 'react';
import FontAwesome from 'react-fontawesome';

const Arrow = props => {
  const { icon, ...rest } = props;
  return (
    <FontAwesome {...rest} name={icon} />
  );
}

export default Arrow;