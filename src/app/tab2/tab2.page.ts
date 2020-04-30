import { Component, OnInit } from '@angular/core';
import { Firebase1Service,estructura2 } from './../services/firebase1.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public contactos1:estructura2[];

  constructor(
    private firebase1:Firebase1Service
  ) {}
  ngOnInit():void{
    this.firebase1.verPersonas1().subscribe(res=>{
      console.log('personas',res);
      this.contactos1=res;
    });
  }


}
