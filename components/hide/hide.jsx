import React from 'react';
import classnames from 'classnames/bind';

import { useViewport } from '@/utilities/viewport';

import styles from './hide.module.scss';

const cx = classnames.bind(styles);

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
  const viewport = useViewport();
  const shouldHideChildren = { desktop, tablet, phone }[viewport];

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
