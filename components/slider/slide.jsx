import React from 'react';

import {
  Row,
  Column,
  Box,
  Section,
  Text,
  Button,
  Container,
  Spacing,
} from '@/components';

const Slide = React.forwardRef(({ translation, image }, ref) => (
  <Row spacing="none">
    <Column p="1" t="2" d="2">
      <Section align="center">
        <Container spacing="20">
          <Spacing size="16">
            <Text translation={translation} size="60" font="poppins" />
            <Row display="inline" spacing="40">
              <Column>
                <Button
                  type="icon-button"
                  shape="circle"
                  border
                  icon={{ name: 'arrow-left', size: '24' }}
                  onClick={() => ref.slickPrev()}
                />
              </Column>
              <Column>
                <Button
                  type="icon-button"
                  shape="circle"
                  border
                  icon={{ name: 'arrow-right', size: '24' }}
                  onClick={() => ref.slickNext()}
                />
              </Column>
            </Row>
          </Spacing>
        </Container>
      </Section>
    </Column>
    <Column p="1" t="2" d="2">
      <Box image={image} />
    </Column>
  </Row>
));

export default Slide;
