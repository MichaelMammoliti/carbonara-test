import React from 'react';
import classnames from 'classnames/bind';

import styles from './container.module.scss';

const cx = classnames.bind(styles);

const Container = ({ children, size, full }) => (
  <div
    className={cx('container', {
      [`container--size-${size}`]: size,
      'container--full': full,
    })}
  >
    {children}
  </div>
);

export default Container;
