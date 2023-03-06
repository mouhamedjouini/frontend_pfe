import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth : AuthService,private router:Router){}



  canActivate() {

    if (this._auth.isLoggedIn() == true) {
      if( this._auth.getUserData().role == '1'){
        return true;
      }else{
        this.router.navigate(['/login']);

        return false;
      }


    } else {
      this.router.navigate(['/login']);

      return false;

    }

  }


}