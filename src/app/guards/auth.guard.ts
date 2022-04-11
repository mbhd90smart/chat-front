import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router: Router, private tokenStorage: TokenStorageService,) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.tokenStorage.getToken();
    
    if (token) {
      return true;
    } else {
      this.router.navigate(["/chat/login-email"]);
    }
  }
}
