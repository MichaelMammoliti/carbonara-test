import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import {
  Button,
  Text,
  Spacing,
} from '@/components';

import styles from './hero-slide.module.scss';

const AnimatedTexts = ({ texts }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(() => {
        const value = counter + 1;

        if (value === texts.length) {
          return 0;
        }

        return value;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <div className={styles['animated-texts']}>
      <AnimatePresence>
        {texts.map((translation, index) => ((index === counter) && (
          <motion.div
            initial={{ opacity: 0, y: '50%', position: 'absolute' }}
            animate={{ opacity: 1, y: 0, position: 'absolute' }}
            exit={{ opacity: 0, y: '-50%', position: 'absolute' }}
            key={translation}
          >
            <Text translation={translation} size="60" weight="600" color="white" display="inline" />
          </motion.div>
        )))}
      </AnimatePresence>
    </div>
  );
};

const cities = [
  'London',
  'Rome',
];

const HeroSlide = ({ link, title }) => (
  <div className={styles['hero-slide']}>
    <Spacing size="18">
      <div>
        <Text translation={title} color="white" size="60" display="inline" />
        <AnimatedTexts texts={cities} />
      </div>

      <Button translation={link.translation} height="58" size="20-26" theme={link.theme} />
    </Spacing>
  </div>
);

export default HeroSlide;
