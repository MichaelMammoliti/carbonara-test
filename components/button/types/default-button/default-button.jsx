import React from 'react';
import classnames from 'classnames/bind';

import { Text } from '@/components';

import styles from './default-button.module.scss';

const cx = classnames.bind(styles);

const DefaultButton = ({
  theme,
  translation,
  weight,
  cases,
  display,
  border,
  children,
  height,
  size,
}) => (
  <span
    className={cx('default-button', {
      [`default-button--theme-${theme}`]: theme,
      [`default-button--display-${display}`]: display,
      'default-button--border': border,
      [`default-button--height-${height}`]: height,
    })}
  >
    {(!translation)
      ? children
      : (
        <span className={styles['default-button__text']}>
          <Text
            cases={cases}
            weight={weight}
            size={size}
            translation={translation}
          />
        </span>
      )
    }
  </span>
);

DefaultButton.defaultProps = {
  type: 'button',
  weight: 'medium',
  theme: 'transparent-dark-gray',
  cases: 'upper',
  display: 'inline',
};

export default DefaultButton;
