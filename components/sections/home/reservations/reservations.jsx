import React from 'react';

import {
  Row,
  Column,
  Box,
  Spacing,
  Text,
  Button,
} from '@/components';

const Reservations = () => (
  <Row spacing="none">
    <Column p="1" t="2" d="2">
      <Box image="/images/hero/1.jpg">
        <Spacing size="33">
          <Row justifyContent="center" alignItems="center" direction="column">
            <Column shrink>
              <Text size="40" translation="pages.home.sections.nonReservation.title" align="center" color="white" />
            </Column>
            <Column shrink>
              <Button
                height="55"
                size="26"
                weight="600"
                theme="transparent-white"
                border
                translation="ctas.findOutMore"
              />
            </Column>
          </Row>
        </Spacing>
      </Box>
    </Column>

    <Column p="1" t="2" d="2">
      <Box image="/images/hero/1.jpg">
        <Row spacing="33" justifyContent="center" alignItems="center" direction="column">
          <Column>
            <Text size="40" translation="pages.home.sections.reservation.title" align="center" color="white" />
          </Column>
          <Column>
            <Button
              height="55"
              size="26"
              weight="600"
              theme="transparent-white"
              border
              translation="ctas.findOutMore"
            />
          </Column>
        </Row>
      </Box>
    </Column>
  </Row>
);

export default Reservations;
