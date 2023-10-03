import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from 'src/app/state/user-state.service';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private userService = inject(UserStateService)
  private calendarService = inject(CalendarService)
//aplicar um filtro de data da mais nova pra mais antiga
  schedules$ = this.calendarService.schedules$
  user = this.userService.getUser()

  parseDate(date: number){
    return new Date(date).toUTCString()
  }
}
