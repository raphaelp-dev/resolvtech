import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-equipment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.scss']
})
export class EditEquipmentComponent implements OnInit{
  types= [
    'Cardio',
    'Free Weights',
    'Machines',
    'Other'
  ]
  private modalRef = inject(NgbActiveModal)
  private fb = inject(FormBuilder)

  data : any
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

ngOnInit(): void {
  this.form.controls.name.setValue(this.data.name)
  this.form.controls.type.setValue(this.data.type)
  this.form.controls.stock.setValue(this.data.stock)
}
  save(){
    const newEquipment = {
      name : this.name,
      type: this.type,
      stock : this.stock,
      id: this.data.id
    }
    return this.modalRef.close(newEquipment)
  }
}
