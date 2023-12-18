import axios from "axios";
import os from 'os';
import useEncryptSecret from "./useEncryptSecret";
type Parameters = {
    app_id: string,
    title: string,
    network: string,
    pay_currency: string,
    lang: string,
    price_amount: number,
    price_currency: string,
    notify_url: string ,
    redirect_url: string,
    order_id: string,
}
type Props = {
    parameters: Parameters
}   
export default async function useGetInvoice({parameters}: Props) {
    const SDK_NAME =
    'unipayment_sdk_node/1.1.1 (' + os.type() + ' ' + os.release() + ')';
    const apiHost = 'https://api.unipayment.io';
    const apiVersion = '1.0';

    const url = apiHost + '/v' + apiVersion + '/invoices';

    const clientId = '10c4a8d4-b08d-4f30-beed-1fbf6442be21';
    const clientSecret = '7ogEvE6vxUqud8hj6Ffw4KsArvrWG4rPf';


    const res = await axios.post(url, parameters, {
        headers: {
          'User-Agent': SDK_NAME,
          Authorization:
            'Hmac ' +
            useEncryptSecret(
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
      return res.data.data;
}   

