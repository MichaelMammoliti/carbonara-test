import React from 'react';

import { Text } from '@/components';

import styles from './text-link.module.scss';

const TextLink = ({ children, translation }) => (
  <span className={styles['text-link']}>
    <Text translation={translation}>{children}</Text>
  </span>
);

TextLink.defaultProps = {};

export default TextLink;
