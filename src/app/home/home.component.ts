import { Component } from '@angular/core';
import { Bodega } from './Interface/Bodega';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  //atributos 
 public bodega:Bodega[]=[]

 public constructor(){
    
    
  }
}


