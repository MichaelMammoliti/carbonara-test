import React from 'react';

import {
  Row,
  Column,
  BackgroundImage,
} from '@/components';

const FiftyFifty = ({ image, children, flip }) => {
  const childs = React.Children.toArray(children);

  const col1 = (
    <Column p="1" t="1" d="2">
      {image ? (
        <BackgroundImage image={image} />
      ) : childs[0]}
    </Column>
  );

  const col2 = (
    <Column p="1" t="1" d="2">
      {image ? children : childs[1]}
    </Column>
  );

  const columns = [col1, col2];

  return (
    <Row spacing="none">
      {flip ? columns.reverse() : columns}
    </Row>
  )
};

export default FiftyFifty;
