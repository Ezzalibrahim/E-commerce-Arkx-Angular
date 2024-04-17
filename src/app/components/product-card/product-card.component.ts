import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit , OnChanges , OnDestroy{


  constructor(){
    console.log("constructor");
  }


  ngOnInit(): void {
      console.log("ngOnInit");
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }


  ngOnDestroy(): void {
      console.log("ngOnDestroy");
  }


  // best prictice is to pass a class or Object like Product in this example
  // but we can pass one variable if we need only one
   
  // @Input() title :string = "test";
  // @Input() price :number = 0;
  // @Input() image :string = "test";
  
  
  @Input() product : Product | null= null;
  @Output() delete : EventEmitter<number> = new EventEmitter<number>();


  deleteProduct(productId : number){
    console.log("product card");
    console.log(productId);
    
    this.delete.emit(productId);
  }
}
