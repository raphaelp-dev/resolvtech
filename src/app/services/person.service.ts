import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private af = inject(AngularFirestore)
  technicianRef = this.af.collection('technician')
  technicians$ = this.technicianRef.valueChanges({idField: 'id'}).pipe(tap(val => console.log(val)))
  clientRef = this.af.collection('client')
  clients$ = this.clientRef.valueChanges({idField: 'id'}).pipe(tap(val => console.log(val)))

  addPerson(newperson : any, role:string){
    of(this.af.collection(role).add({...newperson})).subscribe(console.log)
  }
  
  editPerson(id: string, newPerson : any, role: string){
    of(this.af.collection(role).add({...newPerson})).subscribe(console.log)
  }
  deletePerson(id : string, role: string){
    of(this.af.collection(role).doc(id).delete()).subscribe(console.log)
  }
}
