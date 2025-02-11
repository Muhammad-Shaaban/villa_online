import { HomeBannerComponent } from './../projects-panel/home-banner/home-banner.component';
import { ContactUsComponent } from './../projects-panel/contact-us/contact-us.component';
import { ProjectsComponent } from '../projects-panel/projects/projects.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AshboardPanelRoutingModule } from './ashboard-panel-routing.module';
import { AshboardPanelComponent } from './ashboard-panel.component';
import { ProjectsPanelComponent } from '../projects-panel/projects-panel.component';
import { ServicesComponent } from '../projects-panel/services/services.component';
import { HowWorkComponent } from '../projects-panel/how-work/how-work.component';
import { PartnersComponent } from '../projects-panel/partners/partners.component';
import { AboutUsComponent } from '../projects-panel/about-us/about-us.component';
import { SignInComponent } from '../projects-panel/sign-in/sign-in.component';
import { ProfisionalityComponent } from '../projects-panel/profisionality/profisionality.component';
// import { ContactComponent } from '../../contact/contact.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PrivacyPanelComponent } from '../projects-panel/privacy/privacy.component';
import { RolesPanelComponent } from '../projects-panel/roles-panel/roles-panel.component';


@NgModule({
  declarations: [
    AshboardPanelComponent,
    ProjectsPanelComponent,
    ServicesComponent,
    ProjectsComponent,
    HowWorkComponent,
    PartnersComponent,
    AboutUsComponent,
    SignInComponent,
    ProfisionalityComponent,
    ContactUsComponent,
    HomeBannerComponent,
    PrivacyPanelComponent,
    RolesPanelComponent
  ],
  imports: [
    CommonModule,
    AshboardPanelRoutingModule,
    FormsModule,
   NzSpinModule ,

  ]
})
export class AshboardPanelModule { }
