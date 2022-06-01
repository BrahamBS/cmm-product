import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualiteRoutingModule } from './actualite-routing.module';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';
import { UpdateActualiteComponent } from './update-actualite/update-actualite.component';
import { ListActualiteComponent } from './list-actualite/list-actualite.component';
import { UploadActualiteComponent } from './upload-actualite/upload-actualite.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { NgxUploaderModule } from 'ngx-uploader';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddActualiteComponent,
    UpdateActualiteComponent,
    ListActualiteComponent,
    UploadActualiteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ActualiteRoutingModule,
    NgxUploaderModule,
    HttpClientModule
  ]
})
export class ActualiteModule { }
