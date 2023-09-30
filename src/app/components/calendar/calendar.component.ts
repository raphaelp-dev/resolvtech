import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddScheduleComponent } from 'src/app/shared/dialogs/add-schedule/add-schedule.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  private modal = inject(NgbModal)
  data = [
    {
     title : 'Assistencia informatica jose dos campos',
     client: "Miguel bras",
     date : Date.now(),
     technician: "Jose",
     status: "open"
    },
    {
      title : 'Assistencia informatica jose dos campos2',
      client: "Miguel bras2",
      date : Date.now(),
      technician: "Jose2",
      status: "closed"
    },
    {
      title : 'Assistencia informatica jose dos campos3',
      client: "Miguel bras3",
      date : Date.now(),
      technician: "Jose3",
      status: "pending"
    }
  ]

  createSchedule(){
    this.modal.open(AddScheduleComponent, {centered: true})
  }

  getStatusColor(status : string){
    if(status==="open") return '5px solid green'
    return status === "closed" ? '5px solid red' : '5px solid yellow'
  }
}
