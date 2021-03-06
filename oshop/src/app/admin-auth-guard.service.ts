
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService, private UserService:UserService) { }

  canActivate():Observable<boolean>{
    return this.auth.appUser$
     .map(AppUser=>AppUser.isAdmin);
  }

}
