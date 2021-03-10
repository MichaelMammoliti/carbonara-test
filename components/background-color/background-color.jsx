import React from 'react';
import classnames from 'classnames/bind';

import styles from './background-color.module.scss';

const cx = classnames.bind(styles);

const BackgroundColor = ({ color, opacity, hover }) => (
  <div
    className={cx('background-color', {
      [`background-color--color-${color}`]: !!color,
      [`background-color--opacity-${opacity}`]: !!opacity,
      'background-color--hover': hover,
    })}
  />
);

BackgroundColor.defaultProps = {
  opacity: 'transparent',
};

export default BackgroundColor;
