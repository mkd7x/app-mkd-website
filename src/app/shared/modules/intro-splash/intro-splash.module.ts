import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IntroSplashComponent } from './intro-splash.component';

const COMPONENT = [IntroSplashComponent];

@NgModule({
  declarations: [COMPONENT],
  exports: [COMPONENT],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class IntroSplashModule { }
