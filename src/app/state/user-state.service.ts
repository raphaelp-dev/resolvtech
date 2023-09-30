import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  constructor(){
    if(localStorage.getItem('user')){
      this.authState.set(true)
    }
  }

  private router = inject(Router)
  authState= signal(false)
  user = signal('')

  isAuth(){
    return this.authState()
  }
  signIn(username:string, password:string){
    if(username === 'admin' && password === 'admin'){
      localStorage.setItem('user', username)
      this.authState.set(true)
      this.user.set(username)
      return this.router.navigateByUrl('/dashboard')
    }
   this.authState.set(false)
   return alert('Usuário ou senha inválidos')
  }

  register(username:string, password: string){
    localStorage.setItem('user', username)
    this.authState.set(true)
    this.user.set(username)
    return this.router.navigateByUrl('/dashboard')
  }
  logout(){
    localStorage.clear()
    this.authState.set(false)
    this.router.navigate(['/sign-in'])
  }
}
