export const DEFAULT_LOCALE = 'en';

export const SUPPORTED_LOCALES = [
  'en',
  // 'zh-CN',
  'zh',
];

export const LOCALES_TEXT = {
  'en-US': 'English',
  'zh-CN': '简体中文',
  'zh-TW': '中文繁体',
};

const key = '___LOCALE';
export const setLocale = (val) => {
  localStorage.setItem(key, val);
};

export const getLocale = () => {
  const locale = localStorage.getItem(key);
  if (!locale) {
    return DEFAULT_LOCALE;
  }
  return locale;
};
