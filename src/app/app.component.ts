import { Component } from '@angular/core';
import {Product}  from './models/Product';


// meta data
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // components variables
  title = 'products-list';
  username :string ="test";
  password :string ="user name 2";
  height :string ="500px"


  constructor(){

    // Directives(ngFor | ngIf | ngclass) 
    // Pipe & Decoratores
    // input & output
    // Life cycle || hooks
    // DI 
    // Observables & Subject
    // HttpClient & Service
    // Routing 

    setInterval(()=>{
      // console.log(this.username);
    },1000)

    setTimeout(() => {
      this.username ="Hicham";
    }, 5000);
  }

  // methodes
  getUser(event : Event){
    console.log((event.target as HTMLInputElement).value);
  
    this.password = (event.target as HTMLInputElement).value;
  }
}
