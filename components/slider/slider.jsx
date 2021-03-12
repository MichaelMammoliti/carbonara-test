import React, { useRef, useState } from 'react';
import SlickSlider from 'react-slick';

import styles from './slider.module.scss';

const Slider = ({
  speed,
  slidesToShow,
  slidesToScroll,
  children,
  fade,
}) => {
  const [mounted, setMounted] = useState(false);
  const instanceRef = useRef();

  const setRef = (slider) => {
    instanceRef.current = slider;

    setMounted(true);
  };

  return (
    <div className={styles['slider']}>
      <SlickSlider
        ref={setRef}
        dots
        infinite
        fade={fade}
        speed={speed}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
      >
        {mounted && React.Children.map(children, (childItem) => (
          React.cloneElement(childItem, {
            ...childItem.props,
            ref: instanceRef.current,
          })
        ))}
      </SlickSlider>
    </div>
  );
};

Slider.defaultProps = {
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default Slider;
