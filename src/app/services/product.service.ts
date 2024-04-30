import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { BehaviorSubject, Observable, filter,map, of, tap } from 'rxjs';
import {  } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private productServiceUrl : string = environment.baseUrl +  "/products";
  isLoading$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http : HttpClient) { }


  getProducts  (limit : number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.productServiceUrl}?limit=${limit}`)
        .pipe(
          // Turn off loading after data is fetched
          tap((res)=>{
            this.isLoading$.next(true);
            console.log(res.filter(products => products.price <= 100));
          }),
          map(products => products.filter(product => product.price >= 100))
        )
  }


}
