import { Component, Input, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  @Input() personRole = 'client'
  @Input() data : any
 
  ngOnInit(): void {
    console.log(this.data)
    this.form.controls.name.setValue(this.data.name)
    this.form.controls.email.setValue(this.data.email)
    this.form.controls.nif.setValue(this.data.nif)
    this.form.controls.phone.setValue(this.data.phone)
  }
  private fb = inject(FormBuilder)
  private modalRef = inject(NgbActiveModal)
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
    return this.modalRef.close(newPerson)
  }
}
