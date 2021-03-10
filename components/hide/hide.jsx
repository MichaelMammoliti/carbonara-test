import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';

import { getViewport } from '@/utilities/viewport';

import styles from './hide.module.scss';

const cx = classnames.bind(styles);

const shouldHide = (viewportList, currentViewport) => {
  const result = viewportList.find(viewportItem => viewportItem === currentViewport);

  return Boolean(result);
};

const HideWithCSS = ({
  desktop,
  tablet,
  phone,
  children,
}) => (
  <div
    className={cx('hide', {
      'hide--desktop': desktop,
      'hide--tablet': tablet,
      'hide--phone': phone,
    })}
  >
    {children}
  </div>
);

const HideWithJS = ({
  children,
  phone,
  tablet,
  desktop,
}) => {
  const [currentViewport, setViewport] = useState(getViewport());

  const availableViewports = [
    desktop && 'desktop',
    tablet && 'tablet',
    phone && 'phone',
  ];

  const handleResize = () => {
    setViewport(getViewport());
  };

  useEffect(() => {
    setViewport(getViewport());

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldHideChildren = shouldHide(availableViewports, currentViewport);

  if (shouldHideChildren) {
    return null;
  }

  return children;
};

const Hide = ({
  desktop,
  tablet,
  phone,
  cssOnly,
  children,
}) => {
  const Comp = cssOnly ? HideWithCSS : HideWithJS;

  return (
    <Comp desktop={desktop} tablet={tablet} phone={phone}>
      {children}
    </Comp>
  );
};

export default Hide;
