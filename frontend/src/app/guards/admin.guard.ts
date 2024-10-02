import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  // Get the current user's role from session storage
  const userFullName = sessionStorage.getItem('userFullName');

  // If the user is an admin, allow access
  if (userFullName === 'admin@mm.com') {
    return true;
  }

  const router = inject(Router);
  router.navigate(['/unauthorized']);
  return false;
};
