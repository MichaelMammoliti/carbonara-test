/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classnames from 'classnames/bind';
import { Text, Row, Column, Icon } from '@/components';

import styles from './select.module.scss';

const cx = classnames.bind(styles);

const Select = ({
  options,
  onChange,
  selected,
  name,
  label,
  error,
  valid,
}) => (
  <div
    className={cx('select', {
      'select--valid': valid,
      'select--error': error,
    })}
  >
    <div className={styles['select__field']}>
      <label htmlFor={name}>
        <Text translation={label} size="12" />
      </label>
      <Row>
        <Column>
          <select name={name} onChange={onChange}>
            {options.map(optionItem => (
              <option selected={selected} value={optionItem.value}>{optionItem.text}</option>
            ))}
          </select>
        </Column>
        <Column>
          <div className={styles['select__icon']}>
            <Icon name="arrow-bottom" />
          </div>
        </Column>
      </Row>
    </div>
  </div>
);

export default Select;
