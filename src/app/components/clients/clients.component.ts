import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTableComponent } from 'src/app/shared/info-table/info-table.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, InfoTableComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

}
