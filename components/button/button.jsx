import React from 'react';

import buttonTypes from './types';

import styles from './button.module.scss';

const Button = (props) => {
  const { type, htmlType, onClick } = props;
  const Comp = buttonTypes[type];

  const Component = Comp ? <Comp {...props} /> : null;

  if (onClick || htmlType === 'submit') {
    return (
      <button
        className={styles['button']}
        type={htmlType}
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
  htmlType: 'button',
};

export default Button;
