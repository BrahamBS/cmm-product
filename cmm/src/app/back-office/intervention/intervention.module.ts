import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterventionRoutingModule } from './intervention-routing.module';
import { ListInterventionComponent } from './list-intervention/list-intervention.component';


@NgModule({
  declarations: [
    ListInterventionComponent
  ],
  imports: [
    CommonModule,
    InterventionRoutingModule
  ]
})
export class InterventionModule { }
