import React from 'react';
import classnames from 'classnames/bind';

import styles from './row.module.scss';

const cx = classnames.bind(styles);

const Row = ({
  children,
  justifyContent,
  alignItems,
  spacing,
  nowrap,
  direction,
  display,
  size,
}) => (
  <div
    className={cx('row', {
      [`row--justify-content-${justifyContent}`]: justifyContent,
      [`row--align-items-${alignItems}`]: alignItems,
      [`row--spacing-${spacing}`]: spacing,
      'row--no-wrap': nowrap,
      [`row--direction-${direction}`]: direction,
      [`row--display-${display}`]: display,
      [`row--size-${size}`]: size,
    })}
  >
    <div className={styles['row__items']}>
      {React.Children.map(children, (childrenItem) => (
        childrenItem && React.cloneElement(childrenItem, { spacing })
      ))}
    </div>
  </div>
);

Row.defaultProps = {
  spacing: 'responsive',
  display: 'block',
};

export default Row;
