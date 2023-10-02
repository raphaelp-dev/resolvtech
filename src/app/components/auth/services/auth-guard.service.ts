import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserStateService } from 'src/app/state/user-state.service';

@Injectable()
export class AuthGuardService{
  constructor(public auth: UserStateService, public router: Router, private afAuth:AngularFireAuth) {}
  canActivate(): boolean {
    if(!!this.afAuth.user){
      this.auth.authState.set(true)
      return true
    } 
    return false;
  }
}

