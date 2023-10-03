import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private af = inject(AngularFirestore)

  calendarRef = this.af.collection<any>('calendar')
  schedules$ = this.calendarRef.valueChanges({idField: 'id'}).pipe(tap(val => console.log(val)))

  addSchedule(calendar:any){
    of(this.calendarRef.add({...calendar})).subscribe(console.log)
  }
  editSchedule(calendar : any){
    of(this.calendarRef.doc(calendar.id).update({...calendar})).subscribe(console.log)
  }
  deleteSchedule(calendar:any){
    of(this.calendarRef.doc(calendar.id).delete()).subscribe(console.log)
  }
  
}
