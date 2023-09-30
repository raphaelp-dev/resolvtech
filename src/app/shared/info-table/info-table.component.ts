import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPersonComponent } from '../dialogs/add-person/add-person.component';
import { AddEquipmentComponent } from '../dialogs/add-equipment/add-equipment.component';

@Component({
  selector: 'app-info-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent {
  private modal = inject(NgbModal)
  @Input() data = [
    {
      name: '1',
      email: 'teste@teste.com',
      NIF: 123,
      phone: 123456789
    },
    //repeat the example above three times with different data
    {
      name: '2',
      email: 'teste@teste.com',
      NIF: 123,
      phone: 123456789
    },
    {
      name: '3',
      email: 'teste@teste.com',
      NIF: 123,
      phone: 123456789
    },
    {
      name: '4',
      email: 'teste@teste.com',
      NIF: 123,
      phone: 123456789
    },
    {
      name: '5',
      email: 'teste@teste.com',
      NIF: 123,
      phone: 123456789
    },

  ];
  @Input() title = 'Tecnicos'

  createUser(){
    this.modal.open(AddPersonComponent, {centered:true})
  }
  createEquipment(){
    this.modal.open(AddEquipmentComponent, {centered:true})
  }
}
