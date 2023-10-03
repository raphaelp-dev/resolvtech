import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddScheduleComponent } from 'src/app/shared/dialogs/add-schedule/add-schedule.component';
import { CalendarService } from 'src/app/services/calendar.service';
import { EditCalendarComponent } from 'src/app/shared/dialogs/edit-calendar/edit-calendar.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  private modal = inject(NgbModal)
  private calendarService = inject(CalendarService)
  schedules$ = this.calendarService.schedules$

  createSchedule(){
    const modalRef = this.modal.open(AddScheduleComponent, { centered: true });
    modalRef.result
      .then((result) => {
        if (!!result) {
          return this.calendarService.addSchedule(result);
        }
      })
      .catch((err) => console.log(err));
  }

  editSchedule(schedule: any) {
    const modalRef = this.modal.open(EditCalendarComponent, {
      centered: true,
    });
    modalRef.componentInstance.data = schedule;
    modalRef.result
      .then((result) => this.calendarService.editSchedule(result))
      .catch((err) => console.log('deu erro'));
  }

  deleteSchedule(schedule:any){
    this.calendarService.deleteSchedule(schedule)
  }
  getStatusColor(status : string){
    if(status==="open") return '5px solid green'
    return status === "closed" ? '5px solid red' : '5px solid yellow'
  }
  
}
