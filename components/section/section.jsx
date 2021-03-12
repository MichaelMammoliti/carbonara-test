import React from 'react';
import classnames from 'classnames/bind';

import { BackgroundColor, BackgroundImage } from '@/components';

import styles from './section.module.scss';

const cx = classnames.bind(styles);

const Section = ({
  image,
  background,
  backgroundOpacity,
  spacing,
  children,
  absolute,
  align,
}) => (
  <div
    className={cx('section', {
      'section--absolute': absolute,
      [`section--spacing-${spacing}`]: spacing,
      [`section--align-${align}`]: align,
    })}
  >
    {Boolean(image) && (
      <div className={styles['section__background-image']}>
        <BackgroundImage image={image} />
      </div>
    )}

    {Boolean(background) && (
      <div className={styles['section__background-color']}>
        <BackgroundColor color={background} opacity={backgroundOpacity} />
      </div>
    )}

    {Boolean(children) && (
      <div className={styles['section__content']}>
        {children}
      </div>
    )}
  </div>
);

export default Section;
