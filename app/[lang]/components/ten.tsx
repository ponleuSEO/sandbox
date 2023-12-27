import React from 'react';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/i18n.config';
import LocaleSwitcher from '../localeSwitcher';
export default async function Ten(params: { lang: Locale }) {
  const content = await getDictionary(params.lang, 'home');
  if (!content) {
    return <div>No content available</div>;
  }
  return (
    <div>
      <LocaleSwitcher />
      <nav>
        <ul>
          {content.homepage.navigation.map((load) => (
            <li key={load}>{load}</li>
          ))}
        </ul>
      </nav>
      <h1 className='text-4xl'>{content.homepage.home.title}</h1>
      <p>{content.homepage.home.description}</p>
    </div>
  );
}
