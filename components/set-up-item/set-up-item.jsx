import React from 'react';

import {
  Column,
  Row,
  Icon,
  Text,
  Link,
  Spacing,
} from '@/components';

const SetUpItem = ({ title, icon, link }) => (
  <Row spacing="8" nowrap>
    <Column shrink>
      <Icon name={icon} size="64" color="dark-gray" />
    </Column>
    <Column shrink grow>
      <Spacing size="5">
        <Text translation={title} size="25" />
        <Link
          href="/"
          size="20"
          underline
          color="dark-gray"
          translation={link.translation}
        />
      </Spacing>
    </Column>
  </Row>
);

export default SetUpItem;
