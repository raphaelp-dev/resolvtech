import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateService } from 'src/app/state/user-state.service';

@Injectable()
export class AuthGuardService{
  constructor(public auth: UserStateService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuth()) {
      this.router.navigate(['sign-in']);
      return false;
    }
    return true;
  }
}

