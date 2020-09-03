import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { Username } from 'src/app/username';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.component.html',
  styleUrls: ['./alert-page.component.css']
})
export class AlertPageComponent implements OnInit {
  submitted = false;
  addNewItem: FormGroup;
  public items:any = [];
  public datausers:any = [];
  private sub;
  public username: any;

  constructor(private formBuilder: FormBuilder, private productService:ProductService) { }

  ngOnInit() {
    this.username = new Username();
    this.addNewItem = this.formBuilder.group({
      nameuser: ['', Validators.required],
     });
     this.load();
     this.loaddata();
  }
// ********** JSON File Used
  load = () => {
     this.sub = this.productService.getProducts('./assets/data.json')
          .subscribe(res => {
              this.items = res;
          })
  };

  loaddata = () => {
    this.sub = this.productService.getUserdata('./assets/userdata.json')
         .subscribe(res => {
             this.datausers = res;
         })
 };

 removeFromCart = index => {
  this.productService.removeCart(index);
 }; 

 addToCart = (items) => {
  this.productService.addToCart(items)
};

  ngOnDestroy() {
    this.sub.unsubscribe();
 }
}
