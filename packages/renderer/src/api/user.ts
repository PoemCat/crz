export const getLoginQRCode = async () => {
  const url = 'http://localhost:8759/login-qrcode';
  const resp = await fetch(url);
  return resp.json();
};

export const getLoginStatus = async (oauthKey: string) => {
  const url = 'http://localhost:8759/login-status?oauthKey=' + oauthKey;
  const resp = await fetch(url);
  return resp.json();
};
