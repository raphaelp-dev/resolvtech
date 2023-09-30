import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserStateService } from './state/user-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'resolvtech';
  private userService  = inject(UserStateService)
  isAuth(){
    return this.userService.authState()
  }
}
