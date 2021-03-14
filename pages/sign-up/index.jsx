import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from "framer-motion";

import { Formik, Field } from 'formik';

import {
  DefaultRoute,
  Container,
  Spacing,
  Button,
  Box,
  Row,
  Column,
  Text,
  Input,
  Select,
} from '@/components';

import styles from './signup.module.scss';

const slides = [
  {
    id: 0,
    translation: 'pages.signup.sections.slider.usage',
    image: '/images/slider/1.jpg',
  },
  {
    id: 1,
    translation: 'pages.signup.sections.slider.waitlist',
    image: '/images/slider/2.jpg',
  },
  {
    id: 2,
    translation: 'pages.signup.sections.slider.hostpitality',
    image: '/images/slider/3.jpg',
  },
];

const Slider = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    clearInterval(intervalRef);

    intervalRef.current = setInterval(() => {
      setCounter(() => {
        const value = counter + 1;

        if (value === slides.length) {
          return 0;
        }

        return value;
      });
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [counter]);

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
      <AnimatePresence>
        {slides.map((slide, index) => (counter === index) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 1 }}
            key={slide.translation}
          >
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <Box align="bottom" image={slide.image}>
                <div className={styles['wrapper-text']}>
                  <Container spacing="20" vspacing="20">
                    <Text size="40" translation={slide.translation} color="white" />
                  </Container>
                </div>
              </Box>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Form = () => {
  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const handleFormikSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={handleFormikSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field
            as={Input}
            type="email"
            name="email"
            value={values.email}
            errors={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Field
            as={Input}
            type="password"
            name="password"
            value={values.password}
            errors={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Button htmlType="submit" translation="ctas.next" />
        </form>
      )}
    </Formik>
  );
};

const SignUp = () => (
  <DefaultRoute>
    <Row>
      <Column p="1" t="2" d="2">
        <Form />
      </Column>
      <Column p="1" t="2" d="2">
        <Slider />
      </Column>
    </Row>
  </DefaultRoute>
);

export default SignUp;
