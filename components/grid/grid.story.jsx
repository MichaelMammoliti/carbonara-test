import React from 'react';

import { Row, Column } from '@/components';

const Content = () => (
  <p style={{ 'box-shadow': '0 0 10px black', padding: '10px', background: 'red' }}>Column</p>
);

// Default Button
// ===================================
export const Default = (props) => (
  <Row {...props}>
    <Column size={props.size}><Content /></Column>
    <Column size={props.size}><Content /></Column>
    <Column size={props.size}><Content /></Column>
    <Column size={props.size}><Content /></Column>
    <Column size={props.size}><Content /></Column>
    <Column size={props.size}><Content /></Column>
  </Row>
);

export const MultiColumnLayout = (props) => (
  <Row {...props}>
    <Column size="1"><Content /></Column>
    <Column size="2"><Content /></Column>
    <Column size="4"><Content /></Column>
    <Column size="4"><Content /></Column>
    <Column size="5"><Content /></Column>
    <Column size="5"><Content /></Column>
    <Column size="5"><Content /></Column>
    <Column size="5"><Content /></Column>
    <Column size="5"><Content /></Column>
    <Column size="12"><Content /></Column>
    <Column size="12"><Content /></Column>
    <Column size="6"><Content /></Column>
    <Column size="6"><Content /></Column>
    <Column size="4"><Content /></Column>
    <Column size="4"><Content /></Column>
    <Column size="4"><Content /></Column>
    <Column><Content /></Column>
    <Column grow><Content /></Column>
    <Column size="12"><Content /></Column>
  </Row>
);

export const ShrinkGrow = (props) => (
  <Row {...props}>
    <Column shrink><Content /></Column>
    <Column shrink><Content /></Column>
    <Column grow><Content /></Column>
    <Column shrink><Content /></Column>
  </Row>
);

export const Fluid = (props) => (
  <Row {...props}>
    <Column d="2" t="4" p="1"><Content /></Column>
    <Column d="2" t="4" p="1"><Content /></Column>
    <Column d="4" t="4" p="1"><Content /></Column>
    <Column d="4" t="4" p="1"><Content /></Column>
    <Column d="4" t="2" p="2"><Content /></Column>
    <Column d="4" t="2" p="2"><Content /></Column>
  </Row>
);

export default {
  title: 'UI/Grid',
  argTypes: {
    spacing: {
      defaultValue: 'm',
      control: {
        type: 'select',
        options: ['responsive', 'xs', 's', 'n', 'm'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    },
  },
};
