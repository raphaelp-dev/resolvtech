import { Injectable, inject } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private af = inject(AngularFirestore)
  technicians = this.af.collection('technicians')
  addTechnician(newTechnician : any){
    console.log('entrei')
    of(this.technicians.add({newTechnician})).subscribe(console.log)
  }
}
