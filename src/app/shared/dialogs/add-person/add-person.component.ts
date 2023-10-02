import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TechnicianService } from 'src/app/components/technician/services/technician.service';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent {
  @Input() personRole = 'client'
  private modal = inject(NgbModal)
  private fb = inject(FormBuilder)
  private technicianService = inject(TechnicianService)
  form = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    phone: [null, Validators.required],
    nif : [null, Validators.required],
  })
get name(){
  return this.form.get('name')?.value
}
get email(){
  return this.form.get('email')?.value
}
get phone(){
  return this.form.get('phone')?.value
}
get nif(){
  return this.form.get('nif')?.value
}

  save(){
    const newPerson={
      name: this.name,
      email: this.email,
      phone: this.phone,
      nif: this.nif,
      role: this.personRole
    }
    return this.modal.dismissAll(newPerson)
  }
}
