import React from 'react';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/i18n.config';
import LocaleSwitcher from './localeSwitcher';
export default async function Ten({ lang }: { lang: Locale }) {
  const content = await getDictionary(lang);
  return (
    <div>
      <LocaleSwitcher />
      <h1 className='text-4xl'>{content.home.title}</h1>
      <p>{content.home.description}</p>
    </div>
  );
}
