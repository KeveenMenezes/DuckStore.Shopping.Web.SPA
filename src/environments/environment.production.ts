export const environment = {
  production: true,
  cognito: {
    authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_HAw4SggKa',
    clientId: '3gdiou3oorq7oenr1rauv5evd8',
    redirectUrl: 'https://your-production-url.com',
    logoutUrl: 'https://thecodeduck.auth.us-east-1.amazoncognito.com/logout',
    scope: 'email openid phone',
  },
};
