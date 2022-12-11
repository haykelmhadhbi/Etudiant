import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterRoutingModule } from './router-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AffichageopComponent } from '../components/affichageop/affichageop.component';
import{NgxPaginationModule} from 'ngx-pagination'


@NgModule({
  declarations: [
    AffichageopComponent
  ],
  imports: [
    CommonModule,
    RouterRoutingModule,
    FormsModule,
    NgxPaginationModule
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],

})
export class RouterModule { }
