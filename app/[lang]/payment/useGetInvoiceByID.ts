import axios from 'axios';
import os from 'os';
import useEncryptSecret from './useEncryptSecret';

export default async function useGetInvoiceByID(id: string) {
  const SDK_NAME =
    'unipayment_sdk_node/1.1.1 (' + os.type() + ' ' + os.release() + ')';
  const apiHost = 'https://api.unipayment.io';
  const apiVersion = '1.0';

  const url = apiHost + '/v' + apiVersion + '/invoices' + '/?order_id=' + id;

  const clientId = '10c4a8d4-b08d-4f30-beed-1fbf6442be21';
  const clientSecret = '7ogEvE6vxUqud8hj6Ffw4KsArvrWG4rPf';
  console.log(url);

  const res = await axios.get(url, {
    headers: {
      'User-Agent': SDK_NAME,
      Authorization:
        'Hmac ' + useEncryptSecret(clientId, clientSecret, url, 'GET', ''),
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return res.data.data.models[0];
}
