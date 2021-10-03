import { Component, OnInit } from '@angular/core';
import { IBrand } from '../models/brand';
import { IProduct } from '../models/product';
import { IType } from '../models/productType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];

  selectedBrandId?: number;
  selectedTypeId?: number;

  constructor(private shopService: ShopService) {}

  getProducts() {
    this.shopService
      .getProducts(this.selectedBrandId, this.selectedTypeId)
      .subscribe(
        (response) => {
          this.products = response?.data ?? [];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onTypeSelected() {
    console.log(this.selectedTypeId)
    this.getProducts();
  }

  onBrandSelected() {
    this.getProducts();
  }

  getBrands() {
    this.shopService.getBrands().subscribe(
      (response) => {
        this.brands = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTypes() {
    this.shopService.getTypes().subscribe(
      (response) => {
        this.types = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
}
