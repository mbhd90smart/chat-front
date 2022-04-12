import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenAdminStorageService } from '../services';

@Injectable()
export class AuthAdminGuard implements CanActivate{

  constructor(private router: Router, private tokenStorage: TokenAdminStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.tokenStorage.getToken();
    
    if (token) {
      return true;
    } else {
      this.router.navigate(["/admin/login"]);
    }
  }
}
