'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import useGetInvoice from './useGetInvoice';

type Parameters = {
  app_id: string;
  title: string;
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
  const parameters: Parameters = {
    app_id: '71a108a8-24c0-4a83-a417-b84269bc65d6',
    title: 'Test Invoice', //Product Titleimport { v4 } from "uuid";

    network: 'NETWORK_TRX',
    pay_currency: 'USDT',
    lang: 'en',
    price_amount: 10.0, //Price
    price_currency: 'CNY',
    notify_url: 'https://example.com/notify',
    redirect_url: 'https://example.com/redirect',
    order_id: '#' + generateRandomNumber(100000, 999999).toString(),
  };

  const putInvoice = async () => {
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
          onClick={putInvoice}
          className='rounded-lg bg-red-400 px-4 py-2 hover:bg-red-600 hover:text-white'
        >
          Get Invoice
        </button>
      </div>
    </div>
  );
}
