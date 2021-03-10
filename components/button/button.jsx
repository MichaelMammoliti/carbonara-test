import React from 'react';

import buttonTypes from './types';

const Button = (props) => {
  const { type } = props;

  const Component = buttonTypes[type];

  return Component ? (
    <Component {...props} />
  ) : null;
};

Button.defaultProps = {
  type: 'default-button',
};

export default Button;
