import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { AddPersonComponent } from '../dialogs/add-person/add-person.component';
import { AddEquipmentComponent } from '../dialogs/add-equipment/add-equipment.component';
import { PersonService } from 'src/app/services/person.service';
import { EditPersonComponent } from '../dialogs/edit-person/edit-person.component';
import { EquipmentService } from 'src/app/services/equipment.service';
import { EditEquipmentComponent } from '../dialogs/edit-equipment/edit-equipment.component';

@Component({
  selector: 'app-info-table',
  standalone: true,
  imports: [CommonModule],
  providers: [NgbActiveModal],
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss'],
})
export class InfoTableComponent {
  private modal = inject(NgbModal);
  private personService = inject(PersonService);
  private equipmentService = inject(EquipmentService);

  @Output() newPerson = new EventEmitter<any>();
  @Input() data: any;
  @Input() title = 'client';

  createUser() {
    const modalRef = this.modal.open(AddPersonComponent, { centered: true });
    modalRef.componentInstance.personRole = this.title;
    modalRef.result
      .then((result) => {
        if (!!result) {
          return this.personService.addPerson(result);
        }
      })
      .catch((err) => console.log(err));
  }
  deletePerson(person: any) {
    return this.personService.deletePerson(person);
  }
  editPerson(person: any) {
    const modalRef = this.modal.open(EditPersonComponent);
    modalRef.componentInstance.data = person;
    modalRef.result.then(
      (result) => {
        console.log('table')
        console.log(result)
        return this.personService.editPerson(result)},
      (err) => console.log('deu erro')
    );
  }

  createEquipment() {
    const modalRef = this.modal.open(AddEquipmentComponent, { centered: true });
    modalRef.result
      .then((result) => {
        if (!!result) {
          return this.equipmentService.addEquipment(result);
        }
      })
      .catch((err) => console.log(err));
  }
  editEquipment(equipment: any) {
    const modalRef = this.modal.open(EditEquipmentComponent, {
      centered: true,
    });
    modalRef.componentInstance.data = equipment;
    modalRef.result
      .then((result) => this.equipmentService.editEquipment(result))
      .catch((err) => console.log('deu erro'));
  }
  deleteEquipment(equipment:any){
    console.log(equipment)
    return this.equipmentService.deleteEquipment(equipment)
  }
}
