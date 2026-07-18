import { CanActivateFn } from '@angular/router';

export const authMatchGuard: CanActivateFn = (route, state) => {
  return true;
};
