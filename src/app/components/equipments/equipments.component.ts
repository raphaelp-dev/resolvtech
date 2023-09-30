import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTableComponent } from 'src/app/shared/info-table/info-table.component';

@Component({
  selector: 'app-equipments',
  standalone: true,
  imports: [CommonModule, InfoTableComponent],
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent {

}
