import React from 'react';

import { Header, Hero, Footer } from '@/components';

const DefaultRoute = ({ image, children }) => (
  <>
    <Header />

    {image && (
      <Hero image={image} />
    )}

    {children}

    <Footer />
  </>
);

DefaultRoute.defaultProps = {
  type: 'default',
};

export default DefaultRoute;
