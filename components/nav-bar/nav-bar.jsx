import React from 'react';

import {
  Row,
  Column,
  Link,
  Button,
  Container,
  Text,
  Icon,
  Spacing,
} from '@/components';

import { header } from '@/mocks';

import styles from './nav-bar.module.scss';
import pages from '@/mocks/pages/index';

const LanguageSelector = () => (
  <div className={styles['language-selector']}>
    <Container spacing="9">
      <Row alignItems="center" justifyContent="space-between">
        <Column>
          <Text>Unied Kingdom</Text>
        </Column>
        <Column>
          <Icon name="arrow-right" />
        </Column>
      </Row>
    </Container>
  </div>
);

const DownloadSection = () => (
  <Row
    spacing="25"
    alignItems="center"
    direction="column"
  >
    <Column>
      <Button
        border
        theme="transparent-dark-gray"
        translation="ctas.downloadFromAppStore"
        color="dark-gray"
        size="12"
        height="40"
      />
    </Column>
    <Column>
      <Text
        translation="ctas.downloadFromAppStoreNow"
        color="dark-gray-80"
        font="roboto"
        weight="700"
      />
    </Column>
  </Row>
);

const Navigation = ({ items }) => (
  <Container spacing="9" vspacing="20">
    <Spacing size="22">
      <Spacing size="11">
        {items.map(({ path, translation }) => (
          <Link key={path} href={path} size="14" translation={translation} />
        ))}
      </Spacing>

      <Spacing size="9">
        <Button
          height="40"
          size="18"
          translation="pages.forDiners.title"
          theme="transparent-dark-gray"
          border
          display="block"
        />
        <Button
          height="40"
          size="18"
          translation="pages.signUp.title"
          theme="ocra"
          display="block"
        />
      </Spacing>
    </Spacing>
  </Container>
);

const NavBar = ({ items }) => {
  if (!items || !items.length) {
    return null;
  }

  return (
    <div className={styles['nav-bar']}>
      <div className={styles['nav-bar__header']}>
        <LanguageSelector />
      </div>
      <div className={styles['nav-bar__body']}>
        <Row spacing="none" justifyContent="space-between" size="full" direction="column">
          <Column shrink>
            <Navigation items={items} />
          </Column>
          <Column shrink>
            <Container spacing="9" vspacing="18">
              <DownloadSection />
            </Container>
          </Column>
        </Row>
      </div>
    </div>
  );
};

NavBar.defaultProps = {
  items: header,
};

export default NavBar;
