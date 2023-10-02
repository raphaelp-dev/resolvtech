import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddPersonComponent } from '../dialogs/add-person/add-person.component';
import { AddEquipmentComponent } from '../dialogs/add-equipment/add-equipment.component';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-info-table',
  standalone: true,
  imports: [CommonModule],
  providers: [NgbActiveModal],
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent {
  private modal = inject(NgbModal)
  private personService = inject(PersonService)
  @Output() newPerson = new EventEmitter<any>();
  @Input() data:any 
  @Input() title = 'client'

  createUser(){
    const modalRef = this.modal.open(AddPersonComponent, {centered:true})
    modalRef.componentInstance.personRole = this.title
    modalRef.result.then(result => {
    }).catch(err => {
      if(!!err){
        console.log(err)
        return this.personService.addPerson(err, err.role)
      }
    })
   
  }
  createEquipment(){
    this.modal.open(AddEquipmentComponent, {centered:true})
  }
  deletePerson(id:string, role: string){
    return this.personService.deletePerson(id,role)
  }
  editPerson(id:string, newPerson:any, role: string){
    return this.personService.editPerson(id, newPerson, role)
  }
}
