import React from 'react';

import { Button } from '@/components';

const Template = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...props} />
);

// Default Button
// ====================================
export const Default = Template.bind({});
Default.args = {
  translation: 'general.view',
  icon: 'facebook',
};

export default {
  title: 'UI/Button',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'default-button',
        ],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: [
          'primary-1',
          'clear',
          'clear-primary-1',
          'clear-gray',
        ],
      },
    },
  },
};
