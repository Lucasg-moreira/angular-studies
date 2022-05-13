import { Login, User } from './user';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user!: Login;
  constructor(private auth: AuthguardService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    const login = localStorage.getItem('login');
    console.log('log', login);
    if (login === 'true') {
      return true;
    } else {
      alert("Você deve se logar.")
      this.router.navigate(['login'])
      return false;
    }
  }
}
