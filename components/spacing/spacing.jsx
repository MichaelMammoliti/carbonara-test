import React from 'react';
import classnames from 'classnames/bind';

import styles from './spacing.module.scss';

const cx = classnames.bind(styles);

const Spacing = ({ children, size }) => {
  const newChildren = React.Children.toArray(children).filter(Boolean);

  return (
    <div
      className={cx('spacing', {
        [`spacing--size-${size}`]: size,
      })}
    >
      {React.Children.map(newChildren, (childItem) => (
        <div>{childItem}</div>
      ))}
    </div>
  );
};

export default Spacing;
