import { useState, useEffect } from 'react';

const tablet = 1200;
const phone = 768;

export const viewports = {
  tablet,
  phone,
};

export const getViewport = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < phone) {
      return 'phone';
    }

    if (window.innerWidth < tablet) {
      return 'tablet';
    }

    return 'desktop';
  }
};

export const useViewport = () => {
  const [viewport, setViewport] = useState();

  const handleWindowResize = () => {
    setViewport(getViewport());
  };

  useEffect(() => {
    setTimeout(() => {
      setViewport(() => getViewport());
    }, 0);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return viewport;
};
