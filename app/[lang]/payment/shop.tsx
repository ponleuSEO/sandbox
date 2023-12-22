'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useGetInvoice } from './useGetInvoice';

type Parameters = {
  app_id: string;
  title: string;
  description: string;
  network: string;
  pay_currency: string;
  lang: string;
  price_amount: number;
  price_currency: string;
  notify_url: string;
  redirect_url: string;
  order_id: string;
};

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Shop() {
  const [invoiceURL, setInvoiceURL] = useState('');
  const appId = '71a108a8-24c0-4a83-a417-b84269bc65d6';
  const parameters: Parameters = {
    app_id: appId,
    title: 'Facebook Account',
    description:
      'Meta企业广告账户 7户6主页 每个户日限额1000美金 不限制投放域名', //Product Title;
    network: 'NETWORK_TRX',
    pay_currency: 'USDT',
    lang: 'zh-Hant',
    price_amount: 0.1, //Price
    price_currency: 'CNY',
    notify_url: 'https://www.gogo-globalads.com/',
    redirect_url: `https://www.gogo-globalads.com/`,
    order_id: generateRandomNumber(100000, 999999).toString(),
  };

  const PutInvoice = async () => {
    try {
      const invoice = await useGetInvoice({ parameters });
      if (!invoice) return;
      setInvoiceURL(invoice.invoice_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <div>
        <Link href={invoiceURL ? invoiceURL : ''}>
          <h1 className='mb-3 max-w-md overflow-hidden overflow-ellipsis text-5xl'>
            {invoiceURL ? invoiceURL : 'None'}
          </h1>
        </Link>
        <button
          onClick={PutInvoice}
          className='rounded-lg bg-red-400 px-4 py-2 hover:bg-red-600 hover:text-white'
        >
          Get Invoice
        </button>
      </div>
    </div>
  );
}
