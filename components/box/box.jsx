import React from 'react';

import {
  Section,
} from '@/components';

import styles from './box.module.scss';

const Box = ({ image, children, align }) => (
  <div className={styles['box']}>
    <Section align={align} image={image} absolute>
      {children}
    </Section>
  </div>
);

Box.defaultProps = {
  align: 'center',
};

export default Box;
