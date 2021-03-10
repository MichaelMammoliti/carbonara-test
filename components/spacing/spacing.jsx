import React from 'react';
import classnames from 'classnames/bind';

import styles from './spacing.module.scss';

const cx = classnames.bind(styles);

const Spacing = ({ children, level, align }) => {
  const newChildren = React.Children.map(children, (childItem) => childItem ? childItem : null);

  return (
    <div
      className={cx('spacing', {
        [`spacing--level-${level}`]: typeof level !== 'undefined',
        [`spacing--align-${align}`]: align,
      })}
    >
      {React.Children.map(newChildren, (childItem) => (<div>{childItem}</div>))}
    </div>
  );
};

export default Spacing;
