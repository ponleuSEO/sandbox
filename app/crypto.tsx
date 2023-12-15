'use client';
import React from 'react';
import UniPayment from 'unipayment-client';
import configuration from './config.json';
import crypto from 'crypto';
import axios from 'axios';
import os from 'os';
import Shop from './shop';
export default function Crypto() {
  const SDK_NAME =
    'unipayment_sdk_node/1.1.1 (' + os.type() + ' ' + os.release() + ')';
  function signRequest(
    clientId: string,
    clientSecret: string,
    uri: string,
    requestMethod: string,
    body: string
  ) {
    const requestTimeStamp = Math.round(Date.now() / 1000);
    const requestUri = encodeURIComponent(uri.toLowerCase());
    let requestContentBase64String = '';
    if (body !== undefined && body !== null && body.trim() !== '') {
      requestContentBase64String = crypto
        .createHash('md5')
        .update(body)
        .digest('base64');
    }
    const nonce = crypto.randomBytes(16).toString('hex');
    const signatureRawData =
      clientId +
      requestMethod +
      requestUri +
      requestTimeStamp +
      nonce +
      requestContentBase64String;
    const signature = crypto
      .createHmac('SHA256', clientSecret)
      .update(signatureRawData)
      .digest('base64');
    return clientId + ':' + signature + ':' + nonce + ':' + requestTimeStamp;
  }

  const apiHost = 'https://api.unipayment.io';
  let apiVersion = '1.0';
  const parameters = {
    app_id: '71a108a8-24c0-4a83-a417-b84269bc65d6',
    title: 'Test Invoice',
    description: 'Test Desc',
    lang: 'en',
    price_amount: 100.0,
    price_currency: 'USD',
    notify_url: 'https://example.com/notify',
    redirect_url: 'https://example.com/redirect',
    order_id: '#123456',
  };

  const url = apiHost + '/v' + apiVersion + '/invoices';
  const clientId = '10c4a8d4-b08d-4f30-beed-1fbf6442be21';
  const clientSecret = '7ogEvE6vxUqud8hj6Ffw4KsArvrWG4rPf';
  // const res = axios.post(url, parameters, {
  //   headers: {
  //     'User-Agent': SDK_NAME,
  //     Authorization:
  //       'Hmac ' +
  //       signRequest(
  //         clientId,
  //         clientSecret,
  //         url,
  //         'POST',
  //         JSON.stringify(parameters)
  //       ),
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   },
  // });
  // console.log(res);
  const getInvoice = async () => {
    const res = await axios.post(url, parameters, {
      headers: {
        'User-Agent': SDK_NAME,
        Authorization:
          'Hmac ' +
          signRequest(
            clientId,
            clientSecret,
            url,
            'POST',
            JSON.stringify(parameters)
          ),
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return res;
  };

  return (
    <div>
      <Shop getInvoice={getInvoice} />
    </div>
  );
}
