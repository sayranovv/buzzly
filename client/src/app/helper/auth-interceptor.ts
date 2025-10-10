import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';
import { TokenStorage } from '../service/token-storage';

const TOKEN_HEADER_KEY = 'Authorization';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const tokenService = inject(TokenStorage);
  const token = tokenService.getToken();

  if (token) {
    const cloned = req.clone({
      setHeaders: { [TOKEN_HEADER_KEY]: token },
    });

    return next(cloned);
  }

  return next(req);
};
