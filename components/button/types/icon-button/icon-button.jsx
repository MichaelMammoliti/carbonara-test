import React from 'react';

import { Icon } from '@/components';
import classnames from 'classnames/bind';

import styles from './icon-button.module.scss';

const cx = classnames.bind(styles);

const IconButton = ({ icon, size, theme, disabled, onClick }) => (
  <button
    className={cx('icon-button', {
      [`icon-button--theme-${theme}`]: theme,
      'icon-button--disabled': disabled,
    })}
    onClick={() => !disabled && onClick()}
    disabled={disabled}
    type="button"
  >
    <Icon name={icon} size={size} />
  </button>
);

export default IconButton;
