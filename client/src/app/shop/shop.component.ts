import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.getProducts().subscribe(
      (response) => {
        this.products = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
