import React from 'react';

import { Row, Column, Section, Logo, Container, Icon, Button, Text } from '@/components';

import styles from './footer.module.scss';
import { useViewport } from '@/utilities/viewport';

const Socials = ({ socials, color }) => (
  <Row>
    {socials.map((socialItem) => (
      <Column>
        <Icon name={socialItem} color={color} />
      </Column>
    ))}
  </Row>
);

Socials.defaultProps = {
  socials: [
    'facebook',
    'linkedin',
    'twitter',
    'youtube',
    'instagram',
  ],
};

const Footer = () => {
  const viewport = useViewport();

  return (
    <Section background="ocra-dark" backgroundOpacity="opaque">
      <div className={styles['footer']}>
        <div className={styles['footer__content']}>
          <Container spacing="20">
            <Row
              direction={viewport === 'phone' ? 'column' : 'row'}
              spacing={viewport === 'phone' ? '30' : 'none'}
              justifyContent={viewport === 'phone' ? 'center' : 'space-between'}
              alignItems="center"
            >
              <Column>
                <Text size="14" weight="600" color="">©2020 Carbonara</Text>
              </Column>
              <Column>
                <Logo name="footer" />
              </Column>
              <Column>
                <Row
                  direction="column"
                  spacing="8"
                  alignItems={viewport === 'phone' ? 'center' : 'right'}
                >
                  <Column>
                    <Button height="35" theme="dark-gray" color="white" size="12" translation="ctas.signUpNow" />
                  </Column>
                  <Column>
                    <Socials />
                  </Column>
                </Row>
              </Column>
            </Row>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
