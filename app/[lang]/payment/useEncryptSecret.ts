import crypto from 'crypto';

export default function useEncryptSecret(
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
