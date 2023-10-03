import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-calendar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-calendar.component.html',
  styleUrls: ['./edit-calendar.component.scss'],
})
export class EditCalendarComponent implements OnInit {
  types = ['open', 'pending', 'closed'];
  private modalRef = inject(NgbActiveModal);
  private fb = inject(FormBuilder);

  data: any;

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

  ngOnInit(): void {
    console.log(this.data)
    this.form.controls.title.setValue(this.data.title);
    this.form.controls.date.setValue(this.data.date);
    this.form.controls.client.setValue(this.data.client);
    this.form.controls.status.setValue(this.data.status);
    this.form.controls.technician.setValue(this.data.technician);
  }
  save() {
    const newSchedule = {
      title: this.title,
      client: this.client,
      technician: this.technician,
      date: this.date,
      status: this.status,
      id: this.data.id
    };
    this.modalRef.close(newSchedule);
  }
}
