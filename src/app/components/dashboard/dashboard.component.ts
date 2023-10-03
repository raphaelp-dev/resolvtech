import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from 'src/app/state/user-state.service';
import { CalendarService } from 'src/app/services/calendar.service';
import { Chart } from 'chart.js/auto';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{
  private userService = inject(UserStateService)
  private calendarService = inject(CalendarService)
  private ar = inject(ActivatedRoute)
//aplicar um filtro de data da mais nova pra mais antiga
  schedules$ = this.calendarService.schedules$.pipe(
    map(val => val.sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())),
    map((val:any) => val.slice(0,5)))

  chartData ={
    open:0,
    closed: 0,
    pending: 0
  }
  user = this.userService.getUser()
  chart: any;
  ngOnInit(): void {
  
    this.ar.snapshot.data['schedules'].map((val : any)=> {
      if(val.status === 'open') this.chartData.open++
      if(val.status === 'closed') this.chartData.closed++
      if(val.status === 'pending') this.chartData.pending++
    })
    this.createChart(this.chartData)
  }
  createChart(chartData: any){
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Agendamento concluídos', 'Agendamentos pendentes', 'Agendamentos em aberto'],
	       datasets: [{
    label: ' Agendamentos',
    data: [chartData.closed, chartData.pending, chartData.open],
    backgroundColor: [
      'green',
      'yellow',
      'red'		
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
