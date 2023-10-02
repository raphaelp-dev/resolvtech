import { Injectable, inject } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private af = inject(AngularFirestore)
  techniciansRef = this.af.collection('technicians')
  technicians$ = this.techniciansRef.valueChanges({idField: 'id'}).pipe(tap(val => console.log(val)))

  addTechnician(newTechnician : any){
    of(this.techniciansRef.add({...newTechnician})).subscribe(console.log)
  }
  
  editTechnician(id: string, technician : any){
    technician = {name: 'deu certo'}
    of(this.techniciansRef.doc(id).update({...technician})).subscribe(console.log)
  }
  deleteTechnician(id : string){
    of(this.techniciansRef.doc(id).delete()).subscribe(console.log)
  }
}
