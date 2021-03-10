import React from 'react';

import {
  Link,
  Row,
  Column,
  Navigation,
  Logo,
  KebabMenu,
  Hide,
  Container,
} from '@/components';

import { home } from '@/mocks/routes';

import styles from './header.module.scss';

const Header = () => (
  <div className={styles['header']}>
    <Container>
      <Row justifyContent="space-between" nowrap alignItems="center">
        <Column shrink>
          <Link href={home.path} type={false}>
            <Logo name="header" />
          </Link>
        </Column>
        <Column shrink>
          <Hide phone tablet>
            <Navigation />
          </Hide>
          <Hide desktop>
            <KebabMenu />
          </Hide>
        </Column>
      </Row>
    </Container>
  </div>
);

export default Header;
