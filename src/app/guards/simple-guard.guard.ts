import { CanActivateFn } from '@angular/router';

export const simpleGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
