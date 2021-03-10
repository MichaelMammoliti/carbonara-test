import {
  waitList,
  reservation,
  whyAreWeFree,
} from '../routes';

export default [
  { id: 0, ...waitList },
  { id: 1, ...reservation },
  { id: 2, ...whyAreWeFree },
];
