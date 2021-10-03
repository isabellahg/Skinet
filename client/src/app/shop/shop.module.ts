import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { CardModule } from "primeng/card";
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, CardModule, MenubarModule, ButtonModule],
  exports: [ShopComponent],
})
export class ShopModule {}
