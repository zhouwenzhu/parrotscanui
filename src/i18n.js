import React, { useEffect, useState } from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import useActiveLocale from './hooks/useActiveLocale';
import { en, zh } from 'make-plural/plurals';

const plurals = {
  'en-US': en,
  'zh-CN': zh,
  'zh-TW': zh,
};

export async function dynamicActivate(locale) {
  const { messages } = await import(`./locales/${ locale }/messages`);
  //i18n.loadLocaleData(locale, { plurals: () => plurals[locale] });
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export function LanguageProvider({ children }) {
  const { locale } = useActiveLocale();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dynamicActivate(locale).then(() => {
      setLoaded(true);
    }).catch((error) => {
      console.error('Failed to activate locale', locale, error);
    });
  }, [locale]);

  // prevent the app from rendering with placeholder text before the locale is loaded
  if (!loaded) return null;

  return (
    <I18nProvider forceRenderOnLocaleChange={ false } i18n={ i18n }>
      { children }
    </I18nProvider>
  );
}
