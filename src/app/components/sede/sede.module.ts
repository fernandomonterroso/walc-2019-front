import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedeRoutingModule } from './sede-routing.module';
import { SedeComponent } from './sede.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [SedeComponent],
  imports: [
    CommonModule,
    SedeRoutingModule,
    HttpClientModule,
    FormsModule,
    NavModule,
  ],
  exports: [SedeComponent]
})
export class SedeModule { }
