import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {Item} from "src/app/item";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartListSubject = new BehaviorSubject([]);

  constructor(public http:HttpClient) { }
  // ********** JSON File Used
  public getProducts(dataURL:string){
      return this.http.get(dataURL)
          .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public getUserdata(dataURL:string){
    return this.http.get(dataURL)
        .catch((error:any) => Observable.throw(error || 'Server error'));
 }

removeCart = index => {
  let current = this.cartListSubject.getValue();
  current.splice(index,1);
  this.cartListSubject.next(current);
  // this.tokenStorage.saveCard(current);
};

addToCart = (cart:Item) => {
  let current = this.cartListSubject.getValue();
  let dup = current.find(c=>c.product.title);
  current.push(cart); 
  console.log(cart);
  this.cartListSubject.next(current);
};
}
