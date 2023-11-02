export const environment = {
  production: true,
  apiUrl: 'https://fico-dlp-api.tpb.vn',
  webURL: 'www.fico-dlp.tpb.vn',
  apiWorkflowUrl: 'https://fico-dlp-api.tpb.vn/digitallending',
  oauth2: {
    url: 'https://fico-dlp-api.tpb.vn/auth/realms/internal/protocol/openid-connect/token',
    clientId: 'digi-portal',
    scope: 'openid',
    clientSecret: '3p3RzODG9wgKvvMESfEyJM0P4Q1GHxjy',
    grantType: 'password',
    grantTypeRefreshToken: 'refresh_token',
  }
  
};
