'use client';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
type Props = {
  getInvoice: () => Promise<AxiosResponse<any, any>>;
};

export default function Shop({ getInvoice }: Props) {
  const [invoiceURL, setInvoiceURL] = useState('');
  const putInvoice = async () => {
    try {
      const currentInvoice = await getInvoice();
      console.log(currentInvoice.data.data.invoice_url);
      if (!currentInvoice) return;
      setInvoiceURL(currentInvoice.data.data.invoice_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Link href={invoiceURL ? invoiceURL : ''}>
        <h1 className='text-red text-5xl'>
          {invoiceURL ? invoiceURL : 'None'}
        </h1>
      </Link>
      <button onClick={putInvoice}>Get Invoice</button>
    </div>
  );
}
