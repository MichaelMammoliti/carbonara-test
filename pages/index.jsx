import React from 'react';

import {
  DefaultRoute,
  Hero,
  HeroClients,
  HeroSlide,
  Container,
  Spacing,
  Slider,
  Slide,
} from '@/components';

import Price from '@/components/sections/home/price';
import WaitList from '@/components/sections/home/wait-list';
import TableManagement from '@/components/sections/home/table-management';
import Reservations from '@/components/sections/home/reservations';

const getStartedLink = { translation: 'ctas.getStarted', theme: 'ocra' };

const slides = [
  {
    id: 0,
    translation: 'pages.home.sections.slider.easyToUse',
    image: '/images/slider/1.jpg',
  },
  {
    id: 1,
    translation: 'pages.home.sections.slider.waitlist',
    image: '/images/slider/2.jpg',
  },
  {
    id: 2,
    translation: 'pages.home.sections.slider.customerExperience',
    image: '/images/slider/3.jpg',
  },
];

const Home = () => (
  <DefaultRoute>
    <Hero image="/images/hero/1.jpg">
      <Container spacing="58">
        <Spacing size="167">
          <HeroSlide
            title="pages.home.sections.hero.title"
            link={getStartedLink}
          />
          <HeroClients />
        </Spacing>
      </Container>
    </Hero>

    <Slider fade>
      {slides.map(slide => (
        <Slide
          key={slide.id}
          translation={slide.translation}
          image={slide.image}
        />
      ))}
    </Slider>

    <Reservations />
    <WaitList />
    <TableManagement />
    <Price />
  </DefaultRoute>
);

export default Home;
