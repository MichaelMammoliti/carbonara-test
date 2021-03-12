import React from 'react';
import Image from 'next/image';

import styles from './background-image.module.scss';

const BackgroundImage = ({ image }) => (
  <div className={styles['background-image']}>
    <Image
      src={image}
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
);

export default BackgroundImage;
