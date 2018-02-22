// inventions.component.ts 

import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { Invention } from './inventions.class';
import { InventionsService } from './inventions.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';
@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css'] ,
  animations:[
    trigger('myanimation',[
      state('small',style({
        transform: 'scale(1)'
      }
      )),
      state('large',style({
        transform: 'scale(1.2)'
      }
      )),
      transition('small<=>large',animate('3000ms ease-in'))
    ])
  ],
  providers: []
})
export class InventionsComponent implements OnInit {
  nameModel : String; 
  inventorModel : String; 
  yearModel : String; 
  detailsModel : String; 
  inventions : Invention[]; 
  totalInventions : number; 
  state: String="small";  
  constructor( 
    private inventionsService : InventionsService , 
        private router: Router 
         ) { 
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';
    this.detailsModel = '';
    // consuming the service method getInventions() to fetch default inventions 
    this.inventions = inventionsService.getInventions(); 
    this.totalInventions = this.inventions.length; 
  }

  ngOnInit() {
  }

  createInvention(){

    this.totalInventions += 1; 
    let newInvention : Invention = {
      id : this.getId(), 
      name: this.nameModel , 
      inventor : this.inventorModel , 
      year : this.yearModel , 
      details : this.detailsModel 
    };

    this.inventions.push( newInvention ); 
    this.nameModel = this.yearModel = this.inventorModel = ''; 
  }

  details( id ) {
     this.router.navigate(['/details' , id ]);
  }

  getId() { 
    return this.totalInventions ; 
  }
  animateme(){
    this.state=(this.state==='small'? 'large':'small');
  }

}