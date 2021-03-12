import React from 'react';
import classnames from 'classnames/bind';

import styles from './container.module.scss';

const cx = classnames.bind(styles);

const Container = ({ children, size, spacing, vspacing, full }) => (
  <div
    className={cx('container', {
      [`container--size-${size}`]: size,
      [`container--spacing-${spacing}`]: spacing,
      [`container--vspacing-${vspacing}`]: vspacing,
      'container--full': full,
    })}
  >
    {children}
  </div>
);

export default Container;
