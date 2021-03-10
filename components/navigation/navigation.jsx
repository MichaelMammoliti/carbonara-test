import React from 'react';

import { Link, Row, Column } from '@/components';
import { header } from '@/mocks';

const Navigation = ({ items, theme }) => {
  if (!items || !items.length) {
    return null;
  }

  return (
    <Row spacing="none" nowrap>
      {items.map(({ path, translation }) => (
        <Column key={path}>
          <Link href={path} type="header-link" theme={theme} translation={translation} />
        </Column>
      ))}
    </Row>
  );
};

Navigation.defaultProps = {
  items: header,
};

export default Navigation;
