import React from 'react';
import classnames from 'classnames/bind';
import { Icon } from '@/components';

import styles from './logo.module.scss';

const cx = classnames.bind(styles);

const Logo = ({ name }) => (
  <span
    className={cx('logo', {
      [`logo--name-${name}`]: name,
    })}
  >
    <Icon name={`logo-${name}`} size="auto" />
  </span>
);

export default Logo;
