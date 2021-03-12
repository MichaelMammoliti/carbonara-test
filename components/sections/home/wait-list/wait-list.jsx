import React from 'react';

import {
  Row,
  Column,
  Box,
  Container,
  Text,
} from '@/components';

const WaitList = () => (
  <Container vspacing="70">
    <Row spacing="none">
      <Column p="1" t="2" d="2">
        <Box image="/images/waitlist.png" />
      </Column>
      <Column p="1" t="2" d="2">
        <Box align="center">
          <Container spacing="58">
            <Row spacing="27" direction="column">
              <Column>
                <Text size="40" translation="pages.home.sections.waitlist.title" weight="500" />
              </Column>
              <Column>
                <Text size="20" translation="pages.home.sections.waitlist.description" />
              </Column>
            </Row>
          </Container>
        </Box>
      </Column>
    </Row>
  </Container>
);

export default WaitList;
