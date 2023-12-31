import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTableComponent } from 'src/app/shared/info-table/info-table.component';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-technician',
  standalone: true,
  imports: [CommonModule, InfoTableComponent],
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})
export class TechnicianComponent {
  private personService = inject(PersonService)
  technicians$ = this.personService.technicians$
}
