import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertPageComponent } from './alert-page/alert-page.component';

const routes: Routes = [
  {path: '', component: AlertPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
