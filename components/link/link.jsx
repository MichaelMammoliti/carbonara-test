/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classnames from 'classnames/bind';
import NextLink from 'next/link';
import styles from './link.module.scss';
import linkTypes from './types';

const cx = classnames.bind(styles);

const Link = (props) => {
  const {
    href,
    type,
    children,
    display,
    translation,
    size,
    underline,
  } = props;

  const Component = linkTypes[type];

  const newChildren = Component && (
    <Component
      size={size}
      underline={underline}
      translation={translation}
    >
      {children}
    </Component>
  );

  return (
    <NextLink href={href}>
      <a
        className={cx('link', {
          [`link--display-${display}`]: display,
        })}
      >
        {newChildren || children}
      </a>
    </NextLink>
  );
};

Link.defaultProps = {
  display: 'block',
  type: 'text-link',
};

export default Link;
