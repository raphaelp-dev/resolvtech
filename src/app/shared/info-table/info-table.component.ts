import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddPersonComponent } from '../dialogs/add-person/add-person.component';
import { AddEquipmentComponent } from '../dialogs/add-equipment/add-equipment.component';
import { TechnicianService } from 'src/app/components/technician/services/technician.service';
import { ClientsService } from 'src/app/components/clients/clients.service';

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
  private technicianService = inject(TechnicianService)
  private clientService = inject(ClientsService)
  @Output() newPerson = new EventEmitter<any>();
  @Input() data:any 
  @Input() title = 'client'

  createUser(){
    const modalRef = this.modal.open(AddPersonComponent, {centered:true})
    modalRef.componentInstance.personRole = this.title
    modalRef.result.then(result => {
    }).catch(err => {
      if(!!err){
        err.role === 'technician' ? this.technicianService.addTechnician(err) : this.clientService.addClient(err)
      }
    })
   
  }
  createEquipment(){
    this.modal.open(AddEquipmentComponent, {centered:true})
  }
  deletePerson(id:string){
    return this.technicianService.deleteTechnician(id)
  }
  editPerson(id:string){
    return this.technicianService.editTechnician(id, {name: 'deu certo'})
  }
}
