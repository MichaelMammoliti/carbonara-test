import React from 'react';

import { Row, Column } from '@/components';

const FiftyFifty = ({ children }) => {
  const childs = React.Children.toArray(children);
  const columns = [childs[0], childs[1]];

  return (
    <Row spacing="none">
      {columns.map((columnItem) => (
        <Column p="1" t="1" d="2">
          {columnItem}
        </Column>
      ))}
    </Row>
  );
};

export default FiftyFifty;
