import React from 'react';

import { Icon } from '@/components';
import classnames from 'classnames/bind';

import styles from './icon-button.module.scss';

const cx = classnames.bind(styles);

const IconButton = ({ icon, size, theme, shape, border }) => (
  <span
    className={cx('icon-button', {
      [`icon-button--theme-${theme}`]: theme,
      [`icon-button--size-${size}`]: size,
      [`icon-button--shape-${shape}`]: shape,
      'icon-button--border': border,
    })}
  >
    <Icon name={icon.name} size={icon.size} />
  </span>
);

IconButton.defaultProps = {
  theme: 'transparent-dark-gray',
  size: 60,
  icon: {
    size: 16,
    name: 'arrow-left',
  },
};

export default IconButton;
