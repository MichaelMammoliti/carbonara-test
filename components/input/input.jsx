import React from 'react';
import classnames from 'classnames/bind';

import { Text, Spacing } from '@/components';

import inputTypes from './types';
import styles from './input.module.scss';

const cx = classnames.bind(styles);

const Input = (props) => {
  const {
    type,
    name,
    placeholder,
    htmlType,
    onChange,
    onBlur,
    value,
    touched,
    errors,
    label,
  } = props;

  const Comp = inputTypes[type];
  const Component = Comp ? <Comp {...props} /> : null;

  const hasErrors = Boolean(errors && errors.length);

  return Component || (
    <div
      className={cx('input', {
        'input--touched': touched,
        'input--valid': touched && !hasErrors,
        'input--invalid': touched && hasErrors,
      })}
    >
      <Spacing size="5">
        <Text translation={label} size="12" />

        <input
          type={htmlType}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />

        {errors && errors.length && (
          <div className={styles['input__errors']}>
            {Object.values(errors).map(errorItemValue => (
              <Text translation={errorItemValue.translation} size="12" color="red" />
            ))}
          </div>
        )}
      </Spacing>
    </div>
  );
};

Input.defaultProps = {
  htmlType: 'text',
};

export default Input;
