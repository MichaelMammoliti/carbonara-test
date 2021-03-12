import React from 'react';

import { Link, Row, Column, Button } from '@/components';
import { header } from '@/mocks';

const Navigation = ({ items }) => {
  if (!items || !items.length) {
    return null;
  }

  return (
    <Row spacing="40" nowrap alignItems="center">
      <Column>
        <Row spacing="30" nowrap>
          {items.map(({ path, translation }) => (
            <Column key={path}>
              <Link href={path} size="14" translation={translation} />
            </Column>
          ))}
        </Row>
      </Column>
      <Column>
        <Row spacing="20" nowrap>
          <Column>
            <Button height="40" size="12" translation="pages.forDiners.title" theme="transparent-dark-gray" border />
          </Column>
          <Column>
            <Button height="40" size="12" translation="pages.signUp.title" theme="ocra" />
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

Navigation.defaultProps = {
  items: header,
};

export default Navigation;
