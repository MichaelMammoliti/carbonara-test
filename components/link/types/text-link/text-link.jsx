import React from 'react';

import { Text } from '@/components';

const TextLink = ({ translation, underline, size }) => (
  <Text translation={translation} underline={underline} color="black" size={size} />
);

TextLink.defaultProps = {};

export default TextLink;
