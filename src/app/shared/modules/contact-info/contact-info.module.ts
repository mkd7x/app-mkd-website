import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info.component';
import { IonicModule } from '@ionic/angular';

const COMPONENT = [ContactInfoComponent];

@NgModule({
  declarations: [COMPONENT],
  exports: [COMPONENT],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ContactInfoModule { }
