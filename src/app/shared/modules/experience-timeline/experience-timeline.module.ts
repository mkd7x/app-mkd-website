import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ExperienceTimelineComponent } from './experience-timeline.component';

const COMPONENT = [ExperienceTimelineComponent]

@NgModule({
  declarations: [COMPONENT],
  exports: [COMPONENT],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ExperienceTimelineModule { }
