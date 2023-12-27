import 'server-only';
import type { Locale } from '@/i18n.config';
import Home from '@/app/[lang]/page';
import { LocaleContent } from '@/type/dictionary.type';
// const dictionaries = {
//   en: () =>
//     import('@/dictionaries/en/home.json').then((module) => module.default),
//   'zh-CN': () =>
//     import('@/dictionaries/zh-CN/home.json').then((module) => module.default),
// };

// export const getDictionary = async (locale: Locale) => {
//   switch (locale) {
//     case 'en':
//       return dictionaries.en();
//     case 'zh-CN':
//       return dictionaries['zh-CN']();
//     default:
//       return dictionaries.en();
//   }
// };

const loadDictionary = (locale: Locale, page: string) => {
  console.log(locale);
  return import(`@/dictionaries/${locale}/${page}.json`).then(
    (module) => module.default
  );
};

export const getDictionary = async (
  locale: Locale,
  page: string
): Promise<LocaleContent | undefined> => {
  return loadDictionary(locale, page);
};
