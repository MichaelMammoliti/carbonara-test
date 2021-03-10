/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classnames from 'classnames/bind';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styles from './link.module.scss';
import linkTypes from './types';

const cx = classnames.bind(styles);

const Link = (props) => {
  const router = useRouter();

  const {
    href,
    exact,
    type,
    onClick,
    children,
    translation,
    display,
    absoluteRedirect,
    ...otherProps
  } = props;

  const Component = linkTypes[type];
  const isActive = router.pathname === href;
  const isAbsoluteRedirect = absoluteRedirect || href.slice(0, 2) === '//';

  const newChildren = Component && (
    <Component
      translation={translation}
      active={isActive}
      href={href}
      {...otherProps}
    >
      {children}
    </Component>
  );

  const linkProps = {
    className: cx('link', {
      [`link--display-${display}`]: display,
    }),
  };

  // if is active, we do not wrap the component inside a clickable element
  if (isActive && newChildren) {
    return newChildren;
  }

  const extraAnchorProps = {};

  if (isAbsoluteRedirect) {
    extraAnchorProps.target = '_blank';
    extraAnchorProps.href = href;
  }

  if (href.indexOf('mailto:') !== -1) {
    extraAnchorProps.href = href;
  }

  if (Object.keys(extraAnchorProps).length) {
    return (
      <a {...linkProps} {...extraAnchorProps}>{children || newChildren}</a>
    );
  }

  return (
    <NextLink
      href={href}
      {...linkProps}
      {...extraAnchorProps}
    >
      <a>{children || newChildren}</a>
    </NextLink>
  );
};

Link.defaultProps = {
  onClick: () => {},
  type: 'button-link',
  display: 'block',
  href: '',
};

export default Link;
