import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product.model';
import { ProductsSrvice } from './products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = new Product();
  products: Product[] = [];
  isEditing: boolean = false;
  enableEditIndex = null;

  constructor(private productsService: ProductsSrvice) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.product.productId = form.value.productId;
    this.product.productName = form.value.productName;
    this.product.productManager = form.value.productManager;
    this.product.salesStartDate = form.value.salesStartDate;
    this.products.push(this.product);
  
  }

  switchEditMode(i) {
    this.isEditing = true;
    this.enableEditIndex = i;
  }

  save() {
    this.isEditing = false;
    this.enableEditIndex = null;
  }

  cancel() {
    this.isEditing = false;
    this.enableEditIndex = null;
  }
}
