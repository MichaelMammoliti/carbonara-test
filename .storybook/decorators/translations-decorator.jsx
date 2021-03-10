import React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../client/app/translations/i18n.config';

const TranslationsDecorator = (Story) => (
  <I18nextProvider i18n={i18n}>
    <Story />
  </I18nextProvider>
);

export default TranslationsDecorator;
