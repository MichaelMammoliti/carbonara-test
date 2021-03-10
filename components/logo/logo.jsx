import React from 'react';
import { Icon } from '@/components';

import styles from './logo.module.scss';

const Logo = ({ name }) => (
  <div className={styles['logo']}>
    <Icon name={`logo-${name}`} size="auto" />
  </div>
);

export default Logo;
