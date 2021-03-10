import React, { useState } from 'react';
import classnames from 'classnames/bind';

import { BackgroundColor, BackgroundImage } from '@/components';

import styles from './section.module.scss';

const cx = classnames.bind(styles);

const initiaState = {
  hover: false,
};

const Section = ({
  image,
  background,
  interactive,
  backgroundOpacity,
  backgroundPosition,
  spacing,
  children,
  absolute,
  boxed,
  align,
}) => {
  const [state, setState] = useState(initiaState);

  const { hover } = state;

  const toggleHover = () => {
    if (!interactive) {
      return;
    }

    setState({
      ...state,
      hover: !hover,
    });
  };

  const handleMouseEnter = () => {
    toggleHover();
  };

  const handleMouseLeave = () => {
    toggleHover();
  };

  return (
    <div
      className={cx('section', {
        'section--absolute': absolute,
        [`section--spacing-${spacing}`]: spacing,
        [`section--spacing-${boxed}`]: boxed,
        [`section--align-${align}`]: align,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && (
        <div className={styles['section__background-image']}>
          <BackgroundImage position={backgroundPosition} image={image} />
        </div>
      )}

      {background && (
        <div className={styles['section__background-color']}>
          <BackgroundColor hover={hover} color={background} opacity={backgroundOpacity} />
        </div>
      )}

      <div className={styles['section__content']}>
        {children}
      </div>
    </div>
  );
};

Section.defaultProps = {
  spacing: 'responsive',
};

export default Section;
