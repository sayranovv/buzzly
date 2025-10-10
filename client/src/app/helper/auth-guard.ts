import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {TokenStorage} from '../service/token-storage';

export const AuthGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const tokenService = inject(TokenStorage)

  const currentUser = tokenService.getUser()
  if (currentUser) {
    return true;
  }

  router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  return false;

}
