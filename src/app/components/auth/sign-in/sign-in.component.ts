import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserStateService } from 'src/app/state/user-state.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [AngularFireAuth],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  private afAuth = inject(AngularFireAuth)
  private userStateService = inject(UserStateService)
  login(username:string, password:string){
    this.afAuth.signInWithEmailAndPassword(username, password).then(result =>{
      console.log(result)
    }).catch(err => console.log(err))
    return this.userStateService.signIn(username, password)
  }
  register(username:string, password:string){
    return this.userStateService.register(username, password)
  
  }
}
