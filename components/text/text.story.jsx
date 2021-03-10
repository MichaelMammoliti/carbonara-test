import React from 'react';

import { Icon, Text } from '@/components';
import { en } from '../../translations';

const getTranslationsKeys = (translations) => {
  const keys = {};
  const currentKeys = [];

  const run = (obj) => {
    const objKeys = Object.keys(obj);

    objKeys.forEach((key, index) => {
      const value = obj[key];
      const isLastItem = index === objKeys.length - 1;

      currentKeys.push(key);

      if (typeof value !== 'string') {
        run(value);
      } else {
        keys[currentKeys.join('.')] = value;
        currentKeys.pop();
      }

      if (isLastItem) {
        currentKeys.pop();
      }
    });
  };

  run(translations);

  return keys;
};

const Template = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Text {...props} />
);

// Default Button
// ===================================
export const Default = Template.bind({});
Default.args = {
  children: 'hello',
};

// Translation Button
// ===================================
export const WithTranslations = Template.bind({});
WithTranslations.args = {
  translation: 'general.underDevelopment',
};

export const NoTranslationsFound = Template.bind({});
NoTranslationsFound.args = {
  translation: 'something.happened',
};

// Children Button
// ===================================
export const WithChildren = Template.bind({});
WithChildren.args = {
  children: (
    <>
      <Icon name="arrowDown" />
      <p>this is a custom children</p>
      <p>this is a custom children</p>
      <p>this is a custom children</p>
      <p>this is a custom children</p>
    </>
  ),
};

// Children Button
// ===================================
export const Responsive = Template.bind({});
Responsive.args = {
  children: 'something',
  size: 3,
  responsive: true,
};

export default {
  title: 'UI/Text',
  argTypes: {
    translation: {
      control: {
        type: 'select',
        options: Object.keys(getTranslationsKeys(en)),
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 's', 'n', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      },
    },
    cases: {
      control: {
        type: 'select',
        options: ['lower', 'upper', 'capitalise'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['white', 'black', 'turquoise'],
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    display: {
      control: {
        type: 'select',
        options: ['inline', 'block'],
      },
    },
    font: {
      control: {
        type: 'select',
        options: ['rubik'],
      },
    },
    responsive: {
      control: {
        type: 'boolean',
      },
    },
  },
};
