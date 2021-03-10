import React from 'react';
import classnames from 'classnames/bind';

import { useViewport } from '@/utilities/viewport';

import Image from 'next/image';

import styles from './background-image.module.scss';

const cx = classnames.bind(styles);

const BackgroundImage = ({ image, size, position }) => {
  const viewport = useViewport();

  return (
    <div
      className={cx('background-image', {
        [`background-image--${size}`]: !!size,
        [`background-image--position-${position}`]: !!position,
      })}
    >
      <Image
        src={`/images/${image}/${viewport}.jpg`}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default BackgroundImage;
