import React from 'react';
import classnames from 'classnames/bind';

import { Text, Icon } from '@/components';

import styles from './default-button.module.scss';

const cx = classnames.bind(styles);

const DefaultButton = ({
  theme,
  translation,
  translationOptions,
  icon,
  tag,
  weight,
  active,
  cases,
  align,
  display,
  onClick,
  children,
}) => {
  const Tag = tag || (active ? 'span' : 'button');

  return (
    // eslint-disable-next-line react/button-has-type
    <Tag
      className={cx('default-button', {
        [`default-button--theme-${theme}`]: theme,
        [`default-button--display-${display}`]: display,
        'default-button--icon': icon,
        'default-button--active': active,
        [`default-button--align-${align}`]: align,
      })}
      onClick={onClick}
    >
      {children && children}

      {icon && !children && (
        <span className={styles['default-button__icon']}>
          <Icon name={icon} />
        </span>
      )}
      {translation && !children && (
        <span className={styles['default-button__text']}>
          <Text
            cases={cases}
            weight={weight}
            translation={translation}
            translationOptions={translationOptions}
          />
        </span>
      )}
    </Tag>
  );
};

DefaultButton.defaultProps = {
  type: 'button',
  weight: 'medium',
  theme: 'primary-1',
  cases: 'upper',
  display: 'inline',
};

export default DefaultButton;
