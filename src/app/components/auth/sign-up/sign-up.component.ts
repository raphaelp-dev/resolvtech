import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from 'src/app/state/user-state.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  private userStateService = inject(UserStateService)
  register(username:string, password:string){
    return this.userStateService.signIn(username, password)
  }
}
