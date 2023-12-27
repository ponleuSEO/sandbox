import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionaries';
import LocaleSwitcher from '../localeSwitcher';
import React from 'react';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const content = await getDictionary(lang, 'about');
  if (!content) {
    return <div>No content available</div>;
  }
  console.log('Hello', content.about);
  return (
    <div>
      <LocaleSwitcher />
      <h1 className='text-3xl '>{content.about.introduction}</h1>
      <h2 className='text-xl'>{content.about.companyName}</h2>
      <p className='text-md'>{content.about.title1}</p>
      <ul>
        {content.about?.service.map((load) => <li key={load}>{load}</li>)}
      </ul>
    </div>
  );
}
