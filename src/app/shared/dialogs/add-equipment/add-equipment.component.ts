import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-equipment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent {
  types= [
    'Cardio',
    'Free Weights',
    'Machines',
    'Other'
  ]
  private modal = inject(NgbModal)
  private fb = inject(FormBuilder)
  form = this.fb.group({
    name: [null, Validators.required],
    type: ['Cardio', Validators.required],
    stock: [null, Validators.required],
  })
get name(){
  return this.form.get('name')?.value
}
get type(){
  return this.form.get('type')?.value
}
get stock(){
  return this.form.get('stock')?.value
}

  save(){
    console.log(this.name, this.type, this.stock)
    this.modal.dismissAll()
  }
}
