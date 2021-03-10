import React from 'react';
import classnames from 'classnames/bind';

import { Section, Text } from '@/components';

import styles from './hero.module.scss';

const cx = classnames.bind(styles);

const Hero = ({ size, title, image, font, textPosition }) => (
  <div
    className={cx('hero', {
      [`hero--size-${size}`]: size,
      [`hero--text-position-${textPosition}`]: textPosition,
    })}
  >
    <Section
      align={!textPosition && 'center'}
      spacing="none"
      image={image}
      background="black"
      backgroundOpacity="transparent"
      backgroundPosition="bottom-center"
    >
      <div className={styles['hero__text-container']}>
        <Section>
          <Text font={font} size="5" weight="light" translation={title} color="white" />
        </Section>
      </div>
    </Section>
  </div>
);

export default Hero;
