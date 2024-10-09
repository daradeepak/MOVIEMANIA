import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const userEmail = sessionStorage.getItem('userEmail');

  if (userEmail === 'admin@mm.com') {
    return true;
  }

  const router = inject(Router);
  router.navigate(['/unauthorized']);
  return false;
};
