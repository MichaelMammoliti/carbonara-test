import React from 'react';

import { Section } from '@/components';

import styles from './hero.module.scss';

const Hero = ({ image, children }) => (
  <div className={styles['hero']}>
    <Section
      spacing="none"
      image={image}
      backgroundOpacity="transparent"
    >
      <div className={styles['hero__content']}>
        {children}
      </div>
    </Section>
  </div>
);

export default Hero;
