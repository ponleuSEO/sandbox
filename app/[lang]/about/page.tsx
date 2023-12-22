import { Locale } from '@/i18n.config';
import { getAboutDictionary } from '@/lib/dictionaries';
import React from 'react';

export default async function Page({ lang }: { lang: Locale }) {
  //   const content = await getAboutDictionary(lang);
  return <div>About</div>;
}
