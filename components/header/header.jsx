import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Link,
  Row,
  Column,
  Navigation,
  Logo,
  KebabMenu,
  Hide,
  Container,
  NavBar,
} from '@/components';

import { home } from '@/mocks/routes';
import { useViewport } from '@/utilities/viewport';

import styles from './header.module.scss';

const Header = () => {
  const viewport = useViewport();

  const [navBarVisible, setNavBarVisible] = useState(false);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      setNavBarVisible(false);
    };
  }, []);

  return (
    <div className={styles['header']}>
      <Hide phone tablet>
        <div className={styles['header__language-selector']}>
          <Container spacing="20">
            <Row justifyContent="flex-end">
              <Column shrink>
                language
              </Column>
            </Row>
          </Container>
        </div>
      </Hide>

      <Container spacing="20" vspacing="6">
        <Row nowrap spacing="none" justifyContent="space-between" alignItems="center">
          <Column shrink>
            <Link href={home.path} type={false}>
              <Logo name="header" />
            </Link>
          </Column>
          <Column shrink>
            <Row display="inline" nowrap spacing="none">
              <Hide phone tablet>
                <Column shrink>
                  <Navigation />
                </Column>
              </Hide>
              <Hide desktop>
                <Column shrink>
                  <KebabMenu onClick={setNavBarVisible} />
                </Column>
              </Hide>
            </Row>
          </Column>
        </Row>
      </Container>

      <AnimatePresence>
        {navBarVisible && viewport !== 'desktop' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <NavBar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
