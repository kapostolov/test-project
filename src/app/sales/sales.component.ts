import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsSrvice } from '../product/products.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  columns: any[] = [];
  subHeaders: any[] = [];
  data: any[] = [];

  constructor(private productsService: ProductsSrvice) { }

  ngOnInit(): void {
    this.productsService.columns$
      .subscribe(x => this.columns = x);

    this.productsService.subHeaders$
      .subscribe(x => this.subHeaders = x);

    this.productsService.data$
      .subscribe(x => this.data = x);
  }

  sort(col: any) {
    col.dir = (col.dir || 1) * -1;

    this.data = this.data.sort((a, b) => {
      return col.dir > 0
        ? a[col.header] - b[col.header]
        : b[col.header] - a[col.header];
    })
  }

  add() {
    const newProduct = {
      "productID": "123123",
      "productName": "TEst ",
      "salesQ1": 1,
      "salesQ2": 2,
      "salesQ3": 3,
      "salesQ4": 4
    }

    this.productsService.saveProduct(newProduct)
  }
}