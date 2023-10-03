import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { tap, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  //first you inject the angular firestore in order to use the collection and docs, so you can access the data base through the af (angular firebase) reference.
  private af = inject(AngularFirestore)

  //create a reference for the database you want to select (same name as in firebase)
  technicianRef = this.af.collection('technician')
  //create an observable that will notifify all subscribers whenever any changes occur
  technicians$ = this.technicianRef.valueChanges({idField: 'id'}).pipe(tap(val => console.log(val)))

  
  clientRef = this.af.collection('client')
  clients$ = this.clientRef.valueChanges({idField: 'id'}).pipe(tap(val => console.log(val)),
  map(val => {return [{name:'teste', nif: '123', email: 'teste@teste.com',id:'1', phone:123}]}))

  addPerson(person:any){
    of(this.af.collection(person.role).add({...person})).subscribe(console.log)
  }
  editPerson(person : any){
    of(this.af.collection(person.role).add({...person})).subscribe(console.log)
  }
  deletePerson(person:any){
    of(this.af.collection(person.role).doc(person.id).delete()).subscribe(console.log)
  }
}
