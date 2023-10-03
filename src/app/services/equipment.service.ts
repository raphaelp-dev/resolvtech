import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
private af = inject(AngularFirestore)

equipmentsRef = this.af.collection('equipments')
equipments$ = this.equipmentsRef.valueChanges({idField: 'id'}).pipe(tap(val => console.log(val)))

addEquipment(equipment:any){
  of(this.af.collection('equipments').add({...equipment})).subscribe()
}
editEquipment(equipment : any){
  of(this.af.collection('equipments').doc(equipment.id).update({...equipment})).subscribe()
}
deleteEquipment(equipment:any){
  of(this.af.collection('equipments').doc(equipment.id).delete()).subscribe()
}

}
