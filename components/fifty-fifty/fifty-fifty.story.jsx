import React from 'react';

import FiftyFifty from './fifty-fifty';

const Template = (props) => (
  <FiftyFifty {...props} />
);

const Children = () => (
  'hello'
);

export const Default = Template.bind({});

Default.args = {
  image: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
  children: <Children />,
};

export default {
  title: 'UI/FiftyFifty',
  argTypes: {},
};
