import { Injectable, inject, signal } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private afAuth = inject(AngularFireAuth)
  private router = inject(Router)
  authState= signal(false)
  private user = signal('')

  isAuth(): Observable<boolean>{
    if(this.authState()) return of(true)
    return this.afAuth.user.pipe(
      map((val:any) => {
        if(val===null) {
          this.router.navigateByUrl('/sign-in')
          return false
        }
        else {
          this.authState.set(true)
          this.user.set(val.email)
          return true
        }
      })
    )
  }
  getUser(){
    return this.user()
  }
  async signIn(username:string, password:string){
    await this.afAuth.signInWithEmailAndPassword(username,password).then(result => {
      this.user.set(result?.user?.email ?? 'Admin')
      this.authState.set(true)
      this.router.navigateByUrl('/dashboard')
    }).catch(err => {
      alert(err.message)
    })
  }

  async register(username:string, password: string){
    await this.afAuth.createUserWithEmailAndPassword(username, password).then((result) =>{
      this.user.set(result?.user?.email ?? 'Admin')
      this.authState.set(true)
      this.router.navigateByUrl('/dashboard')
    }).catch(err => {
      alert(err.message)
    })
  }
  async logout(){
    await this.afAuth.signOut().then(result => {
      this.authState.set(false)
      return this.router.navigateByUrl('/sign-in')
    }).catch(err => {
      console.log(err.message)
    })
  }
}
