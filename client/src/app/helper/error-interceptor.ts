import {inject} from '@angular/core';
import {HttpEvent, HttpInterceptorFn, HttpRequest, HttpHandlerFn} from '@angular/common/http';
import {catchError, throwError, Observable, tap} from 'rxjs';
import {TokenStorage} from '../service/token-storage';
import {Notification} from '../service/notification';
import {Router} from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const router = inject(Router);
  const tokenService = inject(TokenStorage);
  const notificationService = inject(Notification);

  return next(req).pipe(
    catchError(err => {
      if (err.status === 401) {
        tokenService.logOut();
        router.navigate(['/login']);
      }

      const error = err?.error?.message || err.statusText || 'Unknown error';
      notificationService.showSnackBar(error);

      return throwError(() => error);
    })
  );
};
