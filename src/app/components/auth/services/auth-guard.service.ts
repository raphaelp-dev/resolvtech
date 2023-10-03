import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of, tap } from 'rxjs';
import { UserStateService } from 'src/app/state/user-state.service';

@Injectable()
export class AuthGuardService {
  constructor(
    public auth: UserStateService,
    public router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this.auth.isAuth()
  }
}
