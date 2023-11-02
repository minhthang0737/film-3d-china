// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://uat-api.fico.tpb.vn',
  webURL: 'www.dev-portal.fico.tpb.vn',
  apiWorkflowUrl: 'http://10.129.28.54:9090/digitallending-tuxs',
  apiTUXS: 'http://10.129.28.54:9090/digitallending-tuxs',
  oauth2: {
    url: 'http://uat-api.fico.tpb.vn/auth/realms/internal/protocol/openid-connect/token',
    clientId: 'permission',
    scope: 'openid',
    clientSecret: 'SZi7hJlRg1DCmAkLtubDOr7KocpcU9Or',
    grantType: 'password',
    grantTypeRefreshToken: 'refresh_token',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
