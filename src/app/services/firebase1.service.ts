import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface estructura2{
  id?:string;
  email:string;
  mensaje:string;
  nombre:string;
  
};


@Injectable({
  providedIn: 'root'
})
export class Firebase1Service {

  private collection2:AngularFirestoreCollection<estructura2>;
  private persona2$:Observable<estructura2[]>; 

  constructor(
    db2:AngularFirestore
  ) { 
    this.collection2=db2.collection<estructura2>('mensajes');
    this.persona2$= this.collection2.snapshotChanges().pipe(map(
     actions=> {
      return actions.map(action => {
        const data1 = action.payload.doc.data();
        const id = action.payload.doc.id;
        return { id, ...data1 };
        }); 
      }
    ));
  }
// funciones 
agregarPersona1(email_,mensaje_,nombre_)
{
  this.collection2.add({
     email:email_,
     mensaje:mensaje_,
     nombre:nombre_

  });
}
verPersonas1(){
  return this.persona2$;
}
verPresona1(id:string){
  return this.collection2.doc<estructura2>(id).valueChanges();
}
updatePresona1(p:estructura2,id:string){
  return this.collection2.doc(id).update(p);
}
eliminarPersona1(id:string){
  return this.collection2.doc(id).delete();
}

}
