import React from 'react';

import { Text, Row, Column, Spacing, Icon } from '@/components';

import styles from './hero-clients.module.scss';

const HeroClients = ({ items }) => (
  <div className={styles['hero-clients']}>
    <Spacing size="18">
      <Text translation="components.heroClients.title" color="white" size="30" />
      <Row justifyContent="space-between">
        {items && items.length && items.map(({ id, logo }) => (
          <Column shrink key={id}>
            <Icon name={logo} size="auto" color="white" />
          </Column>
        ))}
      </Row>
    </Spacing>
  </div>
);

const clients = [
  { id: 0, logo: 'mamma-pizza' },
  { id: 1, logo: 'don-peppe' },
  { id: 2, logo: 'maggie-fu' },
  { id: 3, logo: 'sushi-burger' },
  { id: 4, logo: 'mamma-pizza' },
  { id: 5, logo: 'don-peppe' },
];

HeroClients.defaultProps = {
  items: clients,
};

export default HeroClients;
