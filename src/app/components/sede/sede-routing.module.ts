import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeComponent } from './sede.component';

const routes: Routes = [
  {
    path:'',
  component: SedeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedeRoutingModule { }
