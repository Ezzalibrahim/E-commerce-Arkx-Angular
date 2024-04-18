import { Component } from '@angular/core';
import { Observable, Subscription, map, of, subscribeOn } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


    products : Product[] = [];
    isLoading : boolean | null = null;



    constructor(private ProductService : ProductService){

        // best practice is to use services
        // fetch("https://fakestoreapi.com/products?limit=5")
        //     .then(data => data.json())
        //     .then(products => this.products = products)

        ProductService.isLoading$.subscribe({
            next : res => {
                this.isLoading = res;
                console.log(res);
            }
        });
        this.ProductService.getProducts(5)
            .subscribe(
                {
                  next : (productsFromBackEnd : Product[])=>{
                    console.log("productsFromBackEnd in components");
                    console.log(productsFromBackEnd);
                    this.products = productsFromBackEnd;
                  },
                  error : err => {
                    console.log(err);
                  },
                  complete() {
                    console.log("complete");
                  }
                }
            )
    }

  deleteProduct(productId : number){
    this.products = this.products.filter(
      (product)=> product.id !== productId);
  }

}
