/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from '../app/lib/i18n';

const messagesMap = {
  en: () => import('../app/messages/en.json'),
  bn: () => import('../app/messages/bn.json'),
  pt: () => import('../app/messages/pt.json'),
};

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale =
    locale && locales.includes(locale as any)
      ? locale
      : defaultLocale;

  return {
    locale: resolvedLocale,
    messages:
      (await messagesMap[
        resolvedLocale as keyof typeof messagesMap
      ]()).default,
  };
});

