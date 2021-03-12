import React from 'react';

import {
  Button,
  Spacing,
  Section,
  Text,
  Row,
  Column,
} from '@/components';

import styles from './box.module.scss';

const Box = ({ image, children }) => (
  <div className={styles['box']}>
    <Section align="center" image={image} absolute>
      {children}
    </Section>
  </div>
);

export default Box;
