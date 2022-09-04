import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TechStackComponent } from './tech-stack.component';

const COMPONENT = [TechStackComponent];

@NgModule({
  declarations: [COMPONENT],
  exports: [COMPONENT],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class TechStackModule { }
