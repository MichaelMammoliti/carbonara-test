import React from 'react';

import {
  Section,
  Spacing,
  Text,
  Button,
  Row,
  Column,
  Container,
} from '@/components';

import styles from './price.module.scss';

const Price = () => (
  <Section background="dark-gray" backgroundOpacity="opacque">
    <div className={styles['price']}>
      <Container size="600" spacing="20">
        <Spacing size="35">
          <Spacing size="16">
            <Text translation="pages.home.sections.price.title" size="36" weight="500" align="center" color="white" />
            <Text translation="pages.home.sections.price.description" size="16" color="white" align="justify" />
          </Spacing>
          <div>
            <Text translation="pages.home.sections.price.free" size="50" align="center" color="white" />
            <Spacing size="9">
              <Text translation="pages.home.sections.price.download" size="16" align="center" color="white" />
              <Text translation="pages.home.sections.price.subscription" size="14" align="center" color="white" />
              <Row spacing="none" alignItems="center" justifyContent="center">
                <Column>
                  <Button translation="ctas.signUp" theme="ocra" color="white" height="40" size="14" color="white" />
                </Column>
              </Row>
            </Spacing>
          </div>
        </Spacing>
      </Container>
    </div>
  </Section>
);

export default Price;
