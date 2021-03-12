import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { useViewport } from '@/utilities/viewport';

import styles from './text.module.scss';

const cx = classnames.bind(styles);

const responsiveSizes = {
  // eslint-disable-next-line object-curly-newline
  desktop: { 1: '14', 2: '16', 3: '24', 4: '36', 5: '48', 6: '64' },
  // eslint-disable-next-line object-curly-newline
  tablet: { 1: '14', 2: '16', 3: '18', 4: '24', 5: '32', 6: '36' },
  // eslint-disable-next-line object-curly-newline
  phone: { 1: '14', 2: '16', 3: '18', 4: '24', 5: '32', 6: '36' },
};

const Text = ({
  children,
  size,
  weight,
  tag,
  color,
  align,
  inline,
  display,
  block,
  translation,
  // responsive,
  underline,
  font,
}) => {
  const { t } = useTranslation();

  const Comp = tag || 'span';
  const newDisplay = display || (inline && 'inline') || (block && 'block');
  const text = translation && t(translation);

  const extraProps = (text)
    ? { dangerouslySetInnerHTML: { __html: text } }
    : { children };

  // TODO
  // const viewport = useViewport();
  // const newSize = responsive
  //   ? responsiveSizes[viewport][size]
  //   : size;

  return (
    <Comp
      className={cx('text', {
        [`text--size-${size}`]: size,
        [`text--weight-${weight}`]: weight,
        [`text--color-${color}`]: color,
        [`text--align-${align}`]: align,
        [`text--display-${display}`]: newDisplay,
        [`text--font-${font}`]: font,
        'text--underline': underline,
      })}
      {...extraProps}
    />
  );
};

Text.defaultProps = {
  weight: 'light',
  responsive: true,
  size: 2,
  display: 'block',
  font: 'roboto',
};

export default Text;
