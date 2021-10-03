import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, MenubarModule, ButtonModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
