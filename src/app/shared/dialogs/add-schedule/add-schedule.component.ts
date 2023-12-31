import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-schedule',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss'],
})
export class AddScheduleComponent {
  types = ['open', 'pending', 'closed'];
  private modalRef = inject(NgbActiveModal);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    title: [null, Validators.required],
    client: [null, Validators.required],
    technician: [null, Validators.required],
    date: [null, Validators.required],
    status: [null, Validators.required],
  });

  get title() {
    return this.form.get('title')?.value;
  }
  get client() {
    return this.form.get('client')?.value;
  }
  get technician() {
    return this.form.get('technician')?.value;
  }
  get date() {
    return this.form.get('date')?.value;
  }
  get status() {
    return this.form.get('status')?.value;
  }
  get name() {
    return this.form.get('name')?.value;
  }

  save() {
    const newSchedule = {
      title: this.title,
      client: this.client,
      technician: this.technician,
      date: this.date,
      status: this.status,
    };
    this.modalRef.close(newSchedule);
  }
}
