import React from 'react';
import {
  Section,
  Container,
  Spacing,
  Text,
  Row,
  Column,
  SetUpItem,
} from '@/components';

import styles from './set-up.module.scss';

const SetUp = ({ items }) => (
  <div className={styles['set-up']}>
    <Section>
      <Container spacing="58">
        <Spacing size="52">
          <Text
            size="35"
            color="dark-gray"
            translation="pages.home.sections.setUp.title"
            align="center"
          />
          <Row>
            {items.map(({ icon, title, link }) => (
              <Column p="1" t="3" d="3">
                <SetUpItem icon={icon} title={title} link={link} />
              </Column>
            ))}
          </Row>
        </Spacing>
      </Container>
    </Section>
  </div>
);

const items = [
  {
    icon: 'download',
    title: 'pages.home.sections.setUp.items.download.title',
    link: {
      href: '',
      translation: 'ctas.signUpNow',
    },
  },
  {
    icon: 'settings',
    title: 'pages.home.sections.setUp.items.restaurants.title',
    link: {
      href: '',
      translation: 'ctas.learnFeatures',
    },
  },
  {
    icon: 'add',
    title: 'pages.home.sections.setUp.items.managing.title',
    link: {
      href: '',
      translation: 'ctas.learnHow',
    },
  },
];

SetUp.defaultProps = {
  items,
};

export default SetUp;
