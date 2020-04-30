import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface estructura{
  id?:string;
  actividad:string;
  costo:string;
  detalle:string;
  fecha:string;
  tiempo:string;
  
};



@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private collection:AngularFirestoreCollection<estructura>;
  private persona$:Observable<estructura[]>;



  constructor(
    db:AngularFirestore,
    
  ) { 
    this.collection=db.collection<estructura>('recorrido');
    this.persona$= this.collection.snapshotChanges().pipe(map(
     actions=> {
      return actions.map(action => {
        const data = action.payload.doc.data();
        const id = action.payload.doc.id;
        return { id, ...data };
        }); 
      }
    ));


  }
 // funciones 
 agregarPersona(actividad_,costo_,detalle_,fecha_,tiempo_)
 {
   this.collection.add({
      actividad:actividad_,
      costo:costo_,
      detalle:detalle_,
      fecha:fecha_,
      tiempo:tiempo_
   });
 }
 verPersonas(){
   return this.persona$;
 }
 verPresona(id:string){
   return this.collection.doc<estructura>(id).valueChanges();
 }
 updatePresona(p:estructura,id:string){
   return this.collection.doc(id).update(p);
 }
 eliminarPersona(id:string){
   return this.collection.doc(id).delete();
 }







}
