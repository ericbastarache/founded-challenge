import React from 'react';

const Image = props => {
  const { src, alt, ...rest } = props;
  return (
    <img className="Image" src={src} alt={alt} {...rest} />
  );
}

export default Image;