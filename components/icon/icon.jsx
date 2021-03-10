import React from 'react';
import classnames from 'classnames/bind';

import icons from './svg';

import styles from './icon.module.scss';

const cx = classnames.bind(styles);

const Icon = ({ name, size, color }) => {
  if (!icons[name]) {
    console.warn(`icon name "${name}" does not exists`);

    return null;
  }

  return (
    <i
      className={cx('icon', {
        [`icon--size-${size}`]: size,
        [`icon--color-${color}`]: color,
      })}
    >
      {icons[name]()}
    </i>
  );
};

export default Icon;
