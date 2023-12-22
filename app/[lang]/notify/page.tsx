'use client';
import React, { useEffect, useState } from 'react';
import useGetInvoiceByID from '../payment/useGetInvoiceByID';
type Invoice = {
  app_id: string;
  invoice_id: string;
  price_amount: number;
  price_currency: string;
  network: string;
  address: string;
  pay_amount: number;
  pay_currency: string;
  exchange_rate: number;
  invoice_url: string;
  status: string;
  error_status: string;
  order_id: string;
};
export default function Page() {
  const [invoice, setInvoice] = useState<Invoice>();

  const orderId = '502959';
  useEffect(() => {
    async function FetchInvoice() {
      const getInvoice = await useGetInvoiceByID(orderId);
      console.log(getInvoice);
      setInvoice(getInvoice);
    }
    FetchInvoice();
  }, []);

  return (
    <div>
      <h1 className='text-5xl text-black'>{invoice?.status}</h1>
      <button
        // onClick={putInvoice}
        className='rounded-lg bg-red-400 px-4 py-2 hover:bg-red-600 hover:text-white'
      >
        Get Invoice
      </button>
    </div>
  );
}
