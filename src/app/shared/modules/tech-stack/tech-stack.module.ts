import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TechStackComponent } from './tech-stack.component';

import { TechDisplayComponent } from '../../components/tech-display/tech-display.component';

const COMPONENT = [TechStackComponent, TechDisplayComponent];

@NgModule({
  declarations: [COMPONENT],
  exports: [COMPONENT],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class TechStackModule { }
