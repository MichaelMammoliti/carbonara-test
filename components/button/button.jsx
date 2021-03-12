import React from 'react';

import buttonTypes from './types';

import styles from './button.module.scss';

const Button = (props) => {
  const { type, onClick } = props;
  const Comp = buttonTypes[type];

  const Component = Comp ? <Comp {...props} /> : null;

  if (onClick) {
    return (
      <button
        className={styles['button']}
        type="button"
        onClick={onClick}
      >
        {Component}
      </button>
    );
  }

  return Component;
};

Button.defaultProps = {
  type: 'default-button',
};

export default Button;
