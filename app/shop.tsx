'use client';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
type Props = {
  getInvoice: () => Promise<AxiosResponse<any, any>>;
};

type Invoice = {
  address: string;
  invoice_url: string;
};
export default function Shop({ getInvoice }: Props) {
  const [invoice, setInvoice] = useState<Invoice>();
  const putInvoice = () => {
    const currentInvoice = getInvoice();
    if (!currentInvoice) return;
    setInvoice((prev) => ({
      ...prev,
      currentInvoice,
    }));
  };
  return (
    <div>
      <h1 className='text-red text-5xl'>{invoice}</h1>
      <button onClick={putInvoice}>Get Invoice</button>
    </div>
  );
}
