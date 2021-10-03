import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { CardModule } from "primeng/card";
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ProductItemComponent } from './product-item/product-item.component';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ShopComponent, ProductItemComponent],
  imports: [CommonModule, CardModule, MenubarModule, ButtonModule, ListboxModule, FormsModule],
  exports: [ShopComponent],
})
export class ShopModule {}
