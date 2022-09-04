import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';

const COMPONENT = [HeaderComponent];


@NgModule({
  declarations: [COMPONENT],
  exports: [COMPONENT],
  imports: [
    CommonModule, IonicModule
  ]
})
export class HeaderModule { }
