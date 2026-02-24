import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { switchMap } from 'rxjs';

const OIDC_DOMAINS = ['amazoncognito.com', 'amazonaws.com'];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isOidcRequest = OIDC_DOMAINS.some((domain) => req.url.includes(domain));
  if (isOidcRequest) {
    return next(req);
  }

  const oidcSecurityService = inject(OidcSecurityService);

  return oidcSecurityService.getAccessToken().pipe(
    switchMap((token) => {
      if (token) {
        const clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next(clonedReq);
      }
      return next(req);
    })
  );
};
