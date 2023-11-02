export const environment = {
  production: true,
  apiUrl: 'http://uat-api.fico.tpb.vn',
  webURL: 'www.uat-portal.fico.tpb.vn',
  apiWorkflowUrl: 'http://uat-api.fico.tpb.vn/digitallending',
  oauth2: {
    url: 'http://uat-api.fico.tpb.vn/auth/realms/internal/protocol/openid-connect/token',
    clientId: 'permission',
    scope: 'openid',
    clientSecret: 'SZi7hJlRg1DCmAkLtubDOr7KocpcU9Or',
    grantType: 'password',
    grantTypeRefreshToken: 'refresh_token',
  }
};
