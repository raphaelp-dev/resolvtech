import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-schedule',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})
export class AddScheduleComponent {
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
    equipment: ['Cardio', Validators.required],
    technician: [null, Validators.required],
    date: [null, Validators.required],
  })
get name(){
  return this.form.get('name')?.value
}
get equipment(){
  return this.form.get('equipment')?.value
}
get technician(){
  return this.form.get('technician')?.value
}
get date(){
  return this.form.get('date')?.value
}

  save(){

    this.modal.dismissAll()
  }
}
