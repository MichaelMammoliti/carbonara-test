import React from 'react';
import classnames from 'classnames/bind';

import styles from './column.module.scss';

const cx = classnames.bind(styles);

const Column = ({
  grow,
  shrink,
  size,
  children,
  alignSelf,
  p, // phone
  t, // tablet
  d, // desktop
}) => (
  <div
    className={cx('column', {
      'column--grow': grow,
      'column--shrink': shrink,
      [`column--size-${size}`]: size,
      [`column--viewport-phone-${p}`]: p,
      [`column--viewport-tablet-${t}`]: t,
      [`column--viewport-desktop-${d}`]: d,
      [`column--align-self-${alignSelf}`]: alignSelf,
    })}
  >
    {children}
  </div>
);

export default Column;
