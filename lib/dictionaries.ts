import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: () =>
    import('@/dictionaries/en/home.json').then((module) => module.default),
  'zh-CN': () =>
    import('@/dictionaries/zh-CN/home.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export const getAboutDictionary = async (locale: Locale) =>
  aboutDictionaries[locale]();
