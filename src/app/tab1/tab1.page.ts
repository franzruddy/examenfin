import { FirebaseService,estructura } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public contactos:estructura [];

  constructor(
    private firebase:FirebaseService
  ) {}
  ngOnInit():void{
    this.firebase.verPersonas().subscribe(res=>{
      console.log('personas',res);
      this.contactos=res;
    })
  }  
}
