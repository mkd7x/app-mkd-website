import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';

import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { IntroSplashModule } from 'src/app/shared/modules/intro-splash/intro-splash.module';
import { TechStackModule } from 'src/app/shared/modules/tech-stack/tech-stack.module';
import { ExperienceTimelineModule } from 'src/app/shared/modules/experience-timeline/experience-timeline.module';
import { ContactInfoModule } from 'src/app/shared/modules/contact-info/contact-info.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    HeaderModule,
    IntroSplashModule,
    TechStackModule,
    ExperienceTimelineModule,
    ContactInfoModule,
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
